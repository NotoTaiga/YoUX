<template>
  <div id="app">
    <MasterHeader></MasterHeader>
    <div class="cont">
      <MasterNav v-if="getPageId() == 1"></MasterNav>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MasterHeader from "@/components/common/header.vue";
import MasterNav from "@/components/common/nav.vue";

import { AgGridVue } from "ag-grid-vue";

@Component({
  components: {
    MasterHeader,
    MasterNav
  }
})
export default class App extends Vue {
  private changePageId(pageId: number) {
    this.$store.dispatch("changePageId", pageId);
  }

  private getPageId() {
    return this.$store.getters.getPageId;
  }

  mounted(): void {
    const routePath: string = this.$route.path;
    let pageId: number = 0;
    switch (routePath) {
      case "/":
        pageId = 0;
        break;
      case "/main":
        pageId = 1;
        break;
      case "/description":
        pageId = 2;
        break;
      case "/other":
        pageId = 3;
        break;
    }

    this.changePageId(pageId);
  }
}
</script>

<style lang="scss">
.cont {
  height: calc(100%);
  display: flex;
}
</style>
