<template>
  <div class="topIndex">
    <div class="anime">
      <div class="itemS" v-if="itemCount < 2">1人1人にあった体験を</div>
      <div class="itemS" v-if="itemCount < 2">
        <span v-if="itemCount == 0">今の</span>
        <span v-if="itemCount == 1" class="text">未来の</span>技術で考える
      </div>
      <div class="itemM" v-if="itemCount == 2">
        <span class="blueText">U</span>ser
        <span class="blueText">X</span>perience for
        <span class="blueText">Yo</span>u
      </div>
      <div class="itemS lineHeight" v-if="itemCount >= 3">
        <span class="titleText">YoUX</span>
        <br />
        <span class="late">- click to next -</span>
      </div>
    </div>
    <router-link to="/main">
      <div v-if="itemCount >= 3" class="nextBox" @click="changePageId(1)"></div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class topIndex extends Vue {
  private changePageId(pageId: number) {
    this.$store.dispatch("changePageId", pageId);
  }

  private itemCount: number = 0;
  private setInterval: any;
  private stopSetInterval(): void {
    clearInterval(this.setInterval);
  }

  created() {
    window.addEventListener("click", () => {
      this.itemCount++;
    });
    this.itemCount = this.$store.getters.getTopItemCount;
    if (this.itemCount == 0) {
      this.setInterval = setInterval(() => {
      this.itemCount++;
      if (this.itemCount >= 3) {
        this.stopSetInterval();
      }
    }, 2500);
    } 
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";

.text {
  font-size: 3rem;
  color: $mainBlue;
  animation: blueText 1s ease 0s 1 alternate none running;
}

.topIndex {
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);

  .anime {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 2.5rem;
    height: calc(100vh - 7rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .itemS {
      text-align: center;
      width: 80%;
      height: 3rem;
      line-height: 3rem;
      animation: rotation 2s ease 0s 1 alternate none running;
      margin-bottom: 1.6rem;
    }

    .itemM {
      font-size: 4rem;
      text-align: center;
      width: 80%;
      height: 3rem;
      line-height: 5rem;
      animation: rotation 2s ease 0s 1 alternate none running;
      margin-bottom: 1.6rem;
    }

    .late {
      animation: late 2s ease 0s 1 alternate none running;
    }

    .lineHeight {
      line-height: 5rem;
    }

    .titleText {
      font-size: 8rem;
    }

    .blueText {
      color: $mainBlue;
    }
  }

  .nextBox {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9;
  }
}

@keyframes late {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes rotation {
  0% {
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes blueText {
  0% {
    opacity: 0;
    font-size: 1rem;
  }

  100% {
    opacity: 1;
    font-size: 3rem;
  }
}
</style>
