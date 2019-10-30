<template>
  <div id="app">
    <MasterHeader></MasterHeader>
    <div class="cont">
      <MasterNav></MasterNav>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';
import MasterHeader from '@/components/common/header.vue';
import MasterNav from '@/components/common/nav.vue'

import {AgGridVue} from "ag-grid-vue";

@Component({
  components:{
    MasterHeader,
    MasterNav,
  }
})
export default class App extends Vue {

  private changePageId(pageId: number) {
    this.$store.dispatch("changePageId", pageId);
  }

  mounted(): void {
    const routePath:string = this.$route.path;
    let pageId:number = 0;
    switch(routePath){
      case '/':
        pageId = 0;
        break;
      case '/main':
        pageId = 1;
        break;
      case '/map':
        pageId = 2;
        break;
      case '/other':
        pageId = 3;
        break;
    }

    this.changePageId(pageId);
  }
}
</script>

<style lang="scss">
.cont {
  height: calc(100vh - 5rem);
  display: flex;
}
</style>
