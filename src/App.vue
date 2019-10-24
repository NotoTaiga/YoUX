<template>
  <div id="app">
    <MasterHeader></MasterHeader>
    <div class="cont">
      <MasterNav></MasterNav>
      <router-view/>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MasterHeader from '@/components/common/header.vue';
import MasterNav from '@/components/common/nav.vue'

@Component({
  components:{
    MasterHeader,
    MasterNav
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
  .cont{
    height:calc(100vh - 5rem);
    display: flex;
  }
</style>
