<template>
  <div class="mainHelp">
    <div class="mainHelp__inner">
      <div class="bg"></div>
      <h2 class="title">使い方説明</h2>
      <div class="imgBox" :style="{ backgroundImage: 'url(' + imgUrl + ')' }"></div>
      <div class="closeBox" @click="close">
        <div class="close"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { dataSet, category, filterCont, categoryFilter } from "../../interface";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class mainHelp extends Vue {
  private imgUrl = require("@/assets/img/help_pc.png");
  private changeImg(w: number) {
    if (w > 800) {
      this.imgUrl = require("@/assets/img/help_pc.png");
    } else {
      this.imgUrl = require("@/assets/img/help_phone.png");
    }
  }

  private close() {
    this.$emit("closeMainHelp");
  }

  beforeMount() {
    let windowWidth: number = window.innerWidth;
    this.changeImg(windowWidth);
    window.addEventListener(
      "resize",
      () => {
        let windowWidth: number = window.innerWidth;
        this.changeImg(windowWidth);
      },
      false
    );
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.mainHelp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999;

  &__inner {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bg {
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.9;
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
  }

  .title {
    position: absolute;
    width: 100%;
    height: 50px;
    line-height: 50px;
    z-index: 999999;
    top: 0;
    font-size: 3rem;
    color: #eee;
    text-align: center;
    background-color: $black;
  }

  .imgBox {
    width: 80%;
    height: 80%;
    position: absolute;
    z-index: 999999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
  }

  .closeBox {
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 30px;
    top: 5px;
    z-index: 999999;
  }

  .close {
    display: inline-block;
    position: relative;
    margin-right: 40px;
    padding: 0;
    width: 2px;
    height: 40px;
    background: #eee;
    transform: rotate(45deg);
  }
  .close:before {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: -16px;
    width: 40px;
    height: 2px;
    margin-top: -2px;
    background: #eee;
  }
}
</style>