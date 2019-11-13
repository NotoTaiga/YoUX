<template>
  <div class="mainExplanation">
    <div class="mainExplanation__inner">
      <div class="bg" @click="closeWindow()"></div>
      <div class="content">
        <div class="imgBox"></div>
        <div class="textBox"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { dataSet } from "../../interface";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class mainExplanation extends Vue {
  @Prop() private dataSet!: dataSet;


  private closeWindow(){
    this.$emit('close');
  }
  beforeMount(): void {
    console.log(this.dataSet);
    
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.mainExplanation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;

  &__inner{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bg{
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.5;
    position:absolute;
    z-index: 99999;
    top: 0;
    left: 0;
  }

  .content{
    z-index: 999999;
    width: 90%;
    height: 90vh;
    border-radius: 1.6rem;
    background-color: $white;
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    margin: auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .imgBox{
      width: calc(50% - 3.2rem);
      height: 90%;
      background-color: red;
    }

    .textBox{
      width: calc(50% - 3.2rem);
      height: 90%;
      background-color: blue;
    }
  }
}
</style>