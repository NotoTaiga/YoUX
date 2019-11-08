<template>
  <div class="mainIndex">
    <!-- <MasterNav></MasterNav> -->
    <div class="headCont">
      <div class="datalevelBox">
        <h3>{{dataLevelText()}}</h3>
        <button v-if="isNamelevelArr()">back</button>
      </div>
    </div>
    <ag-grid-vue class="masterGrid" :gridOptions="gridOptions"></ag-grid-vue>
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

import { Component, Prop, Vue } from "vue-property-decorator";
import { AgGridVue } from "ag-grid-vue";
@Component({
  components: {
    AgGridVue
  }
})
export default class mainIndex extends Vue {
  //aggrid
  private columnDefs: any = null;
  private rowData: any = null;

  private showData: dataSet[] = [];
  private getMasterData():dataSet[] {
    let masterData:dataSet[] = this.$store.getters.getMasterData;
    return masterData;
  }

  private makeShowData(child:string[]):dataSet[] {
    const masterData:dataSet[] = this.getMasterData();
    let showData:dataSet[] = []
    masterData.forEach((d,i) => {
      child.forEach((name,i) =>{
        if(d.name === name){
          showData.push(d);
        }
      });
    });
    return showData;
  }

  public gridOptions: GridOptions = {
    columnDefs : this.columnDefs,
    rowData:[]
  };

  private rowDataArr:any = [];
  private makeRowData(){
    this.rowDataArr = this.showData.map((d,i)=>{
      const childText:string = d.child.length > 0? d.child.length + "のソリューション":"";
      let placeText:string = "";
      d.place.forEach((text,i)=>{
        if (i == d.place.length - 1) {
          placeText += text;
        }else{
          placeText += text + " , ";
        }
      });

      let targetText :string = "";
      d.target.forEach((text,i)=>{
        if (i == d.target.length - 1) {
          targetText += text;
        }else{
          targetText += text + " , "
        }
      });

      const rowData ={
        name:d.name,
        place:placeText,
        target:targetText,
        child:childText,
        explanation:"click"
      }
      return rowData;
    });


  }

  private changeRowData(child:string[]){
    this.showData = this.makeShowData(child);
    this.makeRowData();
  }

  //view
  private namelevelArr: string[] = [];
  private isNamelevelArr() {
    return this.namelevelArr.length > 0;
  }

  private dataLevelText() {
    // this.namelevelArr = this.getDataLevel();
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

  beforeMount(): void {
    this.gridOptions.columnDefs = [
      { headerName: "name",
        field: "name",
        cellRenderer:(params)=>{
          const el = document.createElement('div');
          el.innerHTML = params.value;
          el.addEventListener('click',()=>{
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
          })
          return el;
        }
        },
      { headerName: "place", field: "place" },
      { headerName: "target", field: "target" },
      { headerName: "child", field: "child" },
      { headerName: "explanation", field: "explanation" },
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
