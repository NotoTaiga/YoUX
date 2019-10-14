<template>
  <div id="app">
    <MyHeader></MyHeader>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</!-->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MyHeader from '@/components/common/header.vue';

@Component({
  components:{
    MyHeader
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">

</style>
