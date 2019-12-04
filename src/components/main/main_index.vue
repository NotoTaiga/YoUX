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
      <button class="icon" @click="openFilter()">
        <img src="@/assets/img/filter_black.png" alt="フィルターボタン" />
        <br />
        <span>filter</span>
      </button>
    </div>
    <ag-grid-vue class="masterGrid" :gridOptions="gridOptions" id="grid"></ag-grid-vue>
    <transition name="fade">
    <mainExplanation v-if="openExplanation" :dataSet="clickDataSet" @close="closeWindow()"></mainExplanation>
    </transition>
    <transition name="fade">
    <mainFilter
      v-if="filterState"
      @close="closeFilter"
      @reload="reloadGrid"
      :filterTexts="filterTexts"
      :filterCategory="categoryFilter"
    ></mainFilter>
    </transition>
  </div>
</template>

<script lang="ts">
import { dataSet, category, categoryFilter, filterCont } from "../../interface";
import {
  GridOptions,
  ValueFormatterParams,
  ValueParserParams,
  GridApi
} from "ag-grid-community";

import mainFilter from "@/components/main/main_filter.vue";
import mainExplanation from "@/components/main/main_explanation.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgGridVue } from "ag-grid-vue";

@Component({
  components: {
    AgGridVue,
    mainExplanation,
    mainFilter
  }
})
export default class mainIndex extends Vue {
  //filter
  private filterTexts: string[] = [];
  private changeFilterTexts(newArr: string[]) {
    this.filterTexts = newArr;
  }

  private filterChecker(data: dataSet): boolean {
    let textCheck: boolean = this.textFilterChecker(data.name);
    let categoryFilter: boolean = this.categoryFilterChecker(data);
    if (textCheck && categoryFilter) {
      return true;
    } else {
      return false;
    }
  }

  private textFilterChecker(name: string): boolean {
    if (this.filterTexts.length > 0) {
      let inFilterText: boolean = false;
      this.filterTexts.forEach((t, i) => {
        if (name.indexOf(t) != -1) inFilterText = true;
      });
      return inFilterText;
    }
    return true;
  }

  private categoryFilterChecker(data: dataSet): boolean {
    let checkPlace: boolean = false;
    data.place.forEach(d => {
      if (this.categoryFilter.place.includes(d)) {
        checkPlace = true;
      }
    });

    let checkTarget: boolean = false;
    data.target.forEach(d => {
      if (this.categoryFilter.target.includes(d)) {
        checkTarget = true;
      }
    });

    let checkChild: boolean = true;
    if (this.categoryFilter.child.length < 2) {
      let text = this.categoryFilter.child[0];
      if (text == "有り" && data.child.length == 0) {
        checkChild = false;
      } else if (text == "無し" && data.child.length > 0) {
        checkChild = false;
      }
    }

    let checkExplanation: boolean = true;
    if (this.categoryFilter.explanation.length < 2) {
      let text = this.categoryFilter.explanation[0];
      if (text == "有り" && data.text.length == 0) {
        checkExplanation = false;
      } else if (text == "無し" && data.text.length > 0) {
        checkExplanation = false;
      }
    }

    let checkTargetStory: boolean = true;
    if (this.categoryFilter.targetStory.length < 2) {
      let text = this.categoryFilter.targetStory[0];
      if (text == "有り" && Object.keys(data.targetStory).length == 0) {
        checkTargetStory = false;
      } else if (text == "無し" && Object.keys(data.targetStory).length > 0) {
        checkTargetStory = false;
      }
    }

    let checkUsetech: boolean = false;
    data.usetech.forEach(d => {
      if (this.categoryFilter.usetech.includes(d)) {
        checkUsetech = true;
      }
    });

    return (
      checkPlace &&
      checkTarget &&
      checkChild &&
      checkExplanation &&
      checkTargetStory
    );
  }

  private categoryFilter: categoryFilter = {
    place: [
      "駿河台ホール",
      "教室",
      "E教室",
      "３階廊下",
      "エントランス",
      "会議室",
      "LabProto",
      "カフェテリア",
      "メディアライブラリー",
      "大学事務局",
      "リモート会議室",
      "職員室",
      "学生スマートフォン",
      "職員スマートフォン"
    ],
    target: ["学生", "先生", "事務局", "外部"],
    child: ["有り", "無し"],
    explanation: ["有り", "無し"],
    targetStory: ["有り", "無し"],
    usetech: []
  };

  private changeCategoryFilter(category: category[]) {
    category.forEach(c => {
      switch (c.category) {
        case "place":
          this.categoryFilter.place = c.select;
          break;

        case "target":
          this.categoryFilter.target = c.select;
          break;

        case "child":
          this.categoryFilter.child = c.select;
          break;

        case "explanation":
          this.categoryFilter.explanation = c.select;
          break;

        case "targetStory":
          this.categoryFilter.targetStory = c.select;
          break;

        case "usetech":
          this.categoryFilter.usetech = c.select;
          break;
      }
    });
  }

  private reloadGrid(filterCont: filterCont) {
    this.changeFilterTexts(filterCont.filterText);
    this.changeCategoryFilter(filterCont.filterCategory);

    const arr: string[] = this.getNameLevelArr();
    let newShowData: dataSet[] = [];
    const masterData: dataSet[] = this.getMasterData();

    if (arr.length == 0) {
      if (
        this.filterTexts.length > 0 ||
        this.categoryFilter.place.length ||
        this.categoryFilter.target.length ||
        this.categoryFilter.child.length ||
        this.categoryFilter.explanation.length ||
        this.categoryFilter.targetStory.length ||
        this.categoryFilter.usetech.length
      ) {
        masterData.forEach(d => {
          if (this.filterChecker(d)) {
            newShowData.push(d);
          }
        });
        this.showData = newShowData;
      } else {
        this.showData = masterData;
      }

      this.makeRowData();
      this.updateAggrid();
    } else {
      const name: string = arr[arr.length - 1];
      let nowData: any = masterData.find(d => {
        return d.name === name;
      });
      this.changeRowData(nowData.child);
      this.updateAggrid();
    }
  }

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
          if (this.filterChecker(d)) {
            showData.push(d);
          }
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
    let windowWidth: number = window.screen.availWidth;
    if (windowWidth > 800) {
      windowWidth = window.innerWidth;
    }
    this.rowDataArr = this.showData.map((d, i) => {
      const childText: string =
        d.child.length > 0
          ? d.child.length + "個"
          : "--------------------------------------------";
      let placeText: string = "";
      let isPlaceAll: boolean =
        this.categoryFilter.place.length == d.place.length;
      if (isPlaceAll) {
        placeText = "All";
      } else {
        d.place.forEach((text, i) => {
          if (i == d.place.length - 1) {
            placeText += text;
          } else {
            placeText += text + " , ";
          }
        });
      }

      let targetText: string = "";
      let isTargetAll: boolean =
        this.categoryFilter.target.length == d.target.length;
      if (isTargetAll) {
        targetText = "All";
      } else {
        d.target.forEach((text, i) => {
          if (i == d.target.length - 1) {
            targetText += text;
          } else {
            targetText += text + " , ";
          }
        });
      }
      if (windowWidth > 800) {
        const rowData = {
          name: d.name,
          place: placeText,
          target: targetText,
          child: childText,
          explanation: "click"
        };
        return rowData;
      } else if (800 > windowWidth && windowWidth >= 400) {
        const rowData = {
          name: d.name,
          place: placeText,
          target: targetText,
          explanation: "click"
        };
        return rowData;
      } else {
        const rowData = {
          name: d.name,
          explanation: "click"
        };
        return rowData;
      }
    });
  }

  private changeRowData(child: string[]) {
    this.showData = this.makeShowData(child);
    this.makeRowData();
  }

  public api: any;
  private updateAggrid() {
    this.gridOptions.api!.setRowData(this.rowDataArr);
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
      let newShowData: dataSet[] = [];
      masterData.forEach(d => {
        if (this.filterChecker(d)) {
          newShowData.push(d);
        }
      });
      this.showData = newShowData;
      this.makeRowData();
      this.updateAggrid();
    } else {
      const name: string = arr[arr.length - 1];
      const nowData: any = masterData.find(d => {
        masterData.forEach(d => {
          if (this.filterChecker(d)) {
            return d.name === name;
          }
        });
      });
      this.changeRowData(nowData.child);
      this.updateAggrid();
    }
  }

  private calcWidthPercent(percent: number) {
    let windowWidth: number = window.screen.availWidth;
    if (windowWidth > 800) {
      windowWidth = window.innerWidth;
    }

    let merginWidth: number = 64;
    if (windowWidth < 800) {
      merginWidth = 32;
    }
    const gridWidth: number = windowWidth - merginWidth - 36;
    const cellWidth: number = gridWidth * percent * 0.01;
    return cellWidth;
  }

  //view

  private filterState: boolean = false;
  private openFilter() {
    this.filterState = true;
  }
  private closeFilter() {
    this.filterState = false;
  }

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

  private setColumnDef() {
    let windowWidth: number = window.screen.availWidth;
    if (windowWidth > 800) {
      windowWidth = window.innerWidth;
    }

    if (windowWidth > 800) {
      this.gridOptions.columnDefs = [
        {
          headerName: "ソリューションName",
          field: "name",
          width: this.calcWidthPercent(30) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-left": "none",
            "border-bottom": "none",
            "border-right": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "該当スペース",
          field: "place",
          width: this.calcWidthPercent(25) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "border-right": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "対象者",
          field: "target",
          width: this.calcWidthPercent(20) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "border-right": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "子ソリューション",
          field: "child",
          width: this.calcWidthPercent(15) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "border-right": "none",
            padding: "0 0.6rem",
            "mergin-right": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff",
            "text-overflow": "hidden"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "説明",
          field: "explanation",
          width: this.calcWidthPercent(10) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = "詳しく";
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            el.addEventListener("click", () => {
              this.clickExplanation(params.rowIndex);
            });
            return el;
          }
        }
      ];
    } else if (800 > windowWidth && windowWidth >= 400) {
      this.gridOptions.columnDefs = [
        {
          headerName: "ソリューションName",
          field: "name",
          width: this.calcWidthPercent(40) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-left": "none",
            "border-bottom": "none",
            "border-right": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "該当スペース",
          field: "place",
          width: this.calcWidthPercent(20) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "border-right": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "対象者",
          field: "target",
          width: this.calcWidthPercent(20) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "border-right": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "説明",
          field: "explanation",
          width: this.calcWidthPercent(20) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = "詳しく";
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            el.addEventListener("click", () => {
              this.clickExplanation(params.rowIndex);
            });
            return el;
          }
        }
      ];
    } else {
      this.gridOptions.columnDefs = [
        {
          headerName: "ソリューションName",
          field: "name",
          width: this.calcWidthPercent(70) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-left": "none",
            "border-bottom": "none",
            "border-right": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = params.value;
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            if (
              params.data.child ==
              "--------------------------------------------"
            )
              el.style.cursor = "default";
            el.addEventListener("click", () => {
              this.childClick(params.rowIndex);
            });
            return el;
          }
        },
        {
          headerName: "説明",
          field: "explanation",
          width: this.calcWidthPercent(30) - 6,
          cellStyle: {
            "box-sizing": "border-box",
            height: "3rem",
            "line-height": "3rem",
            border: "1px solid #333",
            "border-bottom": "none",
            "padding-left": "0.6rem",
            cursor: "pointer",
            "background-color": "#fff"
          },
          cellRenderer: params => {
            const el = document.createElement("div");
            el.innerHTML = "詳しく";
            el.style.width = "100%";
            el.style.overflow = "hidden";
            el.style.whiteSpace = "nowrap";
            el.addEventListener("click", () => {
              this.clickExplanation(params.rowIndex);
            });
            return el;
          }
        }
      ];
    }
  }

  beforeMount(): void {
    window.addEventListener(
      "resize",
      () => {
        this.gridOptions.api!.sizeColumnsToFit();
      },
      false
    );
    this.api = this.gridOptions.api;
    this.gridOptions.rowHeight = 30;
    this.gridOptions.rowDragManaged = true;
    this.gridOptions.suppressRowDrag = true;
    this.gridOptions.suppressMovableColumns = true;
    this.setColumnDef();
    this.gridOptions.headerHeight = 60;
    this.gridOptions.suppressScrollOnNewData = false;
    this.showData = this.getMasterData();
    if (this.filterTexts.length > 0) {
      let newShowData: dataSet[] = [];
      this.showData.forEach(d => {
        if (this.filterChecker(d)) {
          newShowData.push(d);
        }
      });
      this.showData = newShowData;
    }
    this.makeRowData();
    this.gridOptions.rowData = this.rowDataArr;
  }
}
</script>

<style lang="scss">
@import "@/assets/style/index.scss";

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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
  height: calc(100vh - 10rem - 1.6rem - 1.6rem);
  font-size: 1.6rem;
  margin: 0 auto;
  border-radius: 2rem;
  border-left: 1px solid $black;
  border-bottom: 1px solid $black;
  overflow: hidden;
}

.ag-row {
  height: 3rem;
}

.ag-pivot-off .ag-header-cell-label {
  box-sizing: border-box;
  padding-left: 0.6rem;
  color: $white;
  background-color: $mainBlue;
  line-height: 6rem;
  border-right: 1px solid $black;
}

.ag-header-container {
  border-radius: 2rem 2rem 0 0;
  overflow: hidden;
}

@media screen and (max-width: 800px) {
  .masterGrid {
    width: calc(100% - 3.2rem);
    height: calc(100vh - 10rem - 1.6rem - 1.6rem);
    font-size: 1.6rem;
    margin: 0 auto;
    border-radius: 2rem;
    border-left: 1px solid $black;
    border-bottom: 1px solid $black;
    overflow: hidden;
  }
}
</style>
