<template>
  <div id="app">
    <MasterHeader></MasterHeader>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</!-->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MasterHeader from '@/components/common/header.vue';

@Component({
  components:{
    MasterHeader
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">

</style>
