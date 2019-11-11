<template>
  <div class="mainIndex">
    <!-- <MasterNav></MasterNav> -->
    <div class="headCont">
      <div class="datalevelBox">
        <h3>{{dataLevelText()}}</h3>
        <button v-if="isNamelevelArr()" @click="backClick()">back</button>
      </div>
    </div>
    <ag-grid-vue class="masterGrid" :gridOptions="gridOptions"></ag-grid-vue>
    <mainExplanation v-if="openExplanation" :dataSet="clickDataSet"></mainExplanation>
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
    // debugger;
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

  //view

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

  private openExplanation:boolean = false;
  private clickExplanation(i:number){
    const d = this.showData[i];
    this.clickDataSet = d;
    this.openExplanation = true;
  }
  private clickDataSet: dataSet = {
    id: 0,
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
    this.gridOptions.columnDefs = [
      {
        headerName: "name",
        field: "name",
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
        headerName: "place",
        field: "place",
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
        cellRenderer: params => {
          const el = document.createElement("div");
          el.innerHTML = params.value;
          el.addEventListener("click", () => {
            this.childClick(params.rowIndex);
          });
          return el;
        }
      },
      { headerName: "explanation",
        field: "explanation",
        cellRenderer: params => {
          const el = document.createElement("div");
          el.innerHTML = params.value;
          el.addEventListener("click", () => {
            this.clickExplanation(params.rowIndex);
            this.childClick(params.rowIndex);
          });
          return el;
        }}
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
}

.masterGrid {
  width: 100%;
  height: 50vw;
  // background-color: red;
}
</style>
