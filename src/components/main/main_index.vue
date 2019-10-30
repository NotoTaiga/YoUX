<template>
  <div class="mainIndex">
    <!-- <MasterNav></MasterNav> -->
    <div class="headCont">
      <div class="datalevelBox">
        <h3>{{changeDataLevel()}}</h3>
        <button v-if="getDataLevel()">back</button>
      </div>
    </div>
    <ag-grid-vue class="masterGrid" :columnDefs="columnDefs" :rowData="rowData"></ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
//
// import MasterNav from '@/components/common/nav.vue';
import { AgGridVue } from "ag-grid-vue";
@Component({
  components: {
    AgGridVue
  }
})
export default class mainIndex extends Vue {
  private test() {
    this.$store.dispatch("changePageName", "aaa");
  }

  private dataleverName: string = "";

  private columnDefs: any = null;
  private rowData: any = null;

  private namelevelArr:string[] = [];
  private getDataLevel(){
    return this.$store.getters.getDatalevelName; 
  }

  private idDataLevel(){
    const namelevelArr:string = this.getDataLevel();
    return namelevelArr.length > 0;
  }

  private changeDataLevel() {
    this.namelevelArr = this.getDataLevel();
    if(this.namelevelArr.length > 0){
      let newName:string = "一覧 → ";
      this.namelevelArr.forEach((name,i) =>{
        newName += i == this.namelevelArr.length-1? name : name + " → ";
      });
      this.dataleverName = newName;
      return newName;
    }else{
      this.dataleverName = 'ソリューション一覧'
      return 'ソリューション一覧';
    }
  }

  mounted(): void {
    this.columnDefs = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
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
