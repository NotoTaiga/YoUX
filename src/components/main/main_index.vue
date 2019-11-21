<template>
  <div class="mainIndex">
    <!-- <MasterNav></MasterNav> -->
    <div class="headCont">
      <div class="datalevelBox">
        <h3 class="datalevelBox__title">{{dataLevelText()}}</h3>
        <button class="icon" v-if="isNamelevelArr()" @click="backClick()">
          <img src="@/assets/img/back_black.png" alt="バックボタン" />
          <br />
          <span>back</span>
        </button>
      </div>
      <button class="icon">
        <img src="@/assets/img/filter_black.png" alt="フィルターボタン" />
        <br />
        <span>filter</span>
      </button>
    </div>
    <ag-grid-vue class="masterGrid" :gridOptions="gridOptions" id="grid"></ag-grid-vue>
    <mainExplanation v-if="openExplanation" :dataSet="clickDataSet" @close="closeWindow()"></mainExplanation>
  </div>
</template>

<script lang="ts">
import { dataSet } from "../../interface";
import {
  GridOptions,
  ValueFormatterParams,
  ValueParserParams,
  GridApi
} from "ag-grid-community";

import mainExplanation from "@/components/main/main_explanation.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgGridVue } from "ag-grid-vue";

@Component({
  components: {
    AgGridVue,
    mainExplanation
  }
})
export default class mainIndex extends Vue {
  //aggrid
  private showData: dataSet[] = [];
  private getMasterData(): dataSet[] {
    let masterData: dataSet[] = this.$store.getters.getMasterData;
    return masterData;
  }

  private makeShowData(child: string[]): dataSet[] {
    const masterData: dataSet[] = this.getMasterData();
    let showData: dataSet[] = [];
    masterData.forEach((d, i) => {
      child.forEach((name, i) => {
        if (d.name === name) {
          showData.push(d);
        }
      });
    });
    return showData;
  }

  public gridOptions: GridOptions = {
    columnDefs: [],
    rowData: []
  };

  private rowDataArr: any = [];
  private makeRowData() {
    this.rowDataArr = this.showData.map((d, i) => {
      const childText: string =
        d.child.length > 0 ? d.child.length + "のソリューション" : "";
      let placeText: string = "";
      d.place.forEach((text, i) => {
        if (i == d.place.length - 1) {
          placeText += text;
        } else {
          placeText += text + " , ";
        }
      });

      let targetText: string = "";
      d.target.forEach((text, i) => {
        if (i == d.target.length - 1) {
          targetText += text;
        } else {
          targetText += text + " , ";
        }
      });

      const rowData = {
        name: d.name,
        place: placeText,
        target: targetText,
        child: childText,
        explanation: "click"
      };
      return rowData;
    });
  }

  private changeRowData(child: string[]) {
    this.showData = this.makeShowData(child);
    this.makeRowData();
  }

  public api: any;
  private updateAggrid() {
    this.gridOptions.api.setRowData(this.rowDataArr);
  }
  private childClick(i: number) {
    const data: dataSet = this.showData[i];
    const nowChild: string[] = this.showData[i].child;
    if (nowChild.length == 0) return;
    this.addNamelevels(data.name, i);
    this.changeRowData(nowChild);
    this.updateAggrid();
  }

  private backClick() {
    this.rmNameLevels();
    const masterData: dataSet[] = this.getMasterData();
    const arr: string[] = this.getNameLevelArr();
    if (arr.length == 0) {
      this.showData = masterData;
      this.makeRowData();
      this.updateAggrid();
    } else {
      const name: string = arr[arr.length - 1];
      const nowData: any = masterData.find(d => {
        return d.name === name;
      });
      this.changeRowData(nowData.child);
      this.updateAggrid();
    }
  }

  private calcWidthPercent(percent: number) {
    const windowWidth: number = window.innerWidth;
    const gridWidth: number = windowWidth - 64 - 47;
    const cellWidth: number = gridWidth * percent * 0.01;
    return cellWidth;
  }

  //view

  private closeWindow() {
    this.clickDataSet = {
      id: -1,
      name: "",
      place: [],
      target: [],
      targetStory: {},
      usetech: [],
      text: [],
      img: null,
      child: []
    };
    this.openExplanation = false;
  }

  private namelevelindex: number[] = [];
  private namelevelArr: string[] = [];
  private isNamelevelArr() {
    return this.namelevelArr.length > 0;
  }
  private addNamelevels(name: string, index: number) {
    this.namelevelArr.push(name);
    this.namelevelindex.push(index);
  }
  private rmNameLevels() {
    this.namelevelArr.pop();
    this.namelevelindex.pop();
  }
  private getNameLevelArr(): string[] {
    return this.namelevelArr;
  }

  private dataLevelText() {
    if (this.namelevelArr.length > 0) {
      let newName: string = "一覧 → ";
      this.namelevelArr.forEach((name, i) => {
        newName += i == this.namelevelArr.length - 1 ? name : name + " → ";
      });
      return newName;
    } else {
      return "ソリューション一覧";
    }
  }

  private openExplanation: boolean = false;
  private clickExplanation(i: number) {
    const d = this.showData[i];
    this.clickDataSet = d;
    this.openExplanation = true;
  }
  private clickDataSet: dataSet = {
    id: -1,
    name: "",
    place: [],
    target: [],
    targetStory: {},
    usetech: [],
    text: [],
    img: null,
    child: []
  };

  beforeMount(): void {
    this.api = this.gridOptions.api;
    this.gridOptions.rowHeight = 30;
    this.gridOptions.columnDefs = [
      {
        headerName: "name",
        field: "name",
        width: this.calcWidthPercent(50),
        cellStyle: {
          "box-sizing": "border-box",
          height: "3rem",
          "line-height": "3rem",
          border: "1px solid #333",
          "border-bottom": "none",
          "border-right": "none",
          "padding-left": "0.6rem"
        },
        cellRenderer: params => {
          const el = document.createElement("div");
          el.innerHTML = params.value;
          // el.style.height = "100%";
          el.addEventListener("click", () => {
            this.childClick(params.rowIndex);
          });
          return el;
        }
      },
      {
        headerName: "place",
        field: "place",
        width: this.calcWidthPercent(20),
        cellStyle: {
          "box-sizing": "border-box",
          height: "3rem",
          "line-height": "3rem",
          border: "1px solid #333",
          "border-bottom": "none",
          "border-right": "none",
          "padding-left": "0.6rem"
        },
        cellRenderer: params => {
          const el = document.createElement("div");
          el.innerHTML = params.value;
          el.addEventListener("click", () => {
            this.childClick(params.rowIndex);
          });
          return el;
        }
      },
      {
        headerName: "target",
        field: "target",
        width: this.calcWidthPercent(10),
        cellStyle: {
          "box-sizing": "border-box",
          height: "3rem",
          "line-height": "3rem",
          border: "1px solid #333",
          "border-bottom": "none",
          "border-right": "none",
          "padding-left": "0.6rem"
        },
        cellRenderer: params => {
          const el = document.createElement("div");
          el.innerHTML = params.value;
          el.addEventListener("click", () => {
            this.childClick(params.rowIndex);
          });
          return el;
        }
      },
      {
        headerName: "child",
        field: "child",
        width: this.calcWidthPercent(10),
        cellStyle: {
          "box-sizing": "border-box",
          height: "3rem",
          "line-height": "3rem",
          border: "1px solid #333",
          "border-bottom": "none",
          "border-right": "none",
          "padding-left": "0.6rem"
        },
        cellRenderer: params => {
          const el = document.createElement("div");
          el.innerHTML = params.value;
          el.addEventListener("click", () => {
            this.childClick(params.rowIndex);
          });
          return el;
        }
      },
      {
        headerName: "explanation",
        field: "explanation",
        width: this.calcWidthPercent(10),
        cellStyle: {
          "box-sizing": "border-box",
          height: "3rem",
          "line-height": "3rem",
          border: "1px solid #333",
          "border-bottom": "none",
          "padding-left": "0.6rem"
        },
        cellRenderer: params => {
          const el = document.createElement("div");
          el.innerHTML = params.value;
          el.addEventListener("click", () => {
            this.clickExplanation(params.rowIndex);
          });
          return el;
        }
      }
    ];
    this.showData = this.getMasterData();
    this.makeRowData();
    this.gridOptions.rowData = this.rowDataArr;
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.mainIndex {
  background-color: $white;
  box-sizing: border-box;
  width: 100%;
  padding-left: 4.7rem;
  color: $black;

  .headCont {
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
    padding: 0 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: #666 solid 1px;
    margin-bottom: 1.6rem;

    .datalevelBox {
      display: flex;
      align-items: center;
      &__title {
        line-height: 5rem;
        font-size: 1.8rem;
        margin-right: 1rem;
      }
    }
  }

  .icon {
    text-align: center;
    height: 3.5rem;
    width: 3.5rem;
    box-sizing: border-box;
    border: $black solid 2px;
    background-color: $white;
    line-height: 1rem;
    border-radius: 0.8rem;
    cursor: pointer;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }

    span {
      font-size: 1rem;
      white-space: nowrap;
    }

    &:hover {
      background-color: $mainBlue;
      color: $white;
    }
  }
}

.masterGrid {
  width: calc(100% - 6.4rem);
  height: calc(100vh - 10rem - 1.6rem);
  font-size: 1.6rem;
  margin: 0 auto;
}

.ag-row {
  height: 3rem;
}
</style>
