<template>
  <div class="topIndex">
    <div class="bg">
      <div class="bg__left"></div>
      <div class="bg__right"></div>
    </div>

    <div class="main">
      <div class="main__ttl">
        Yo
        <span>UX</span>
      </div>

      <ul class="main__list">
        <router-link to="/main">
          <li class="main__item" @click="changePageId(1)">見てみる！</li>
        </router-link>
        <router-link to="/map">
          <li class="main__item" @click="changePageId(2)">イメージマップ</li>
        </router-link>
        <router-link to="/other">
          <li class="main__item" @click="changePageId(3)">その他資料</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class topIndex extends Vue {
  //   @Prop() private msg!: string;
  private changePageId(pageId: number) {
    this.$store.dispatch("changePageId", pageId);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";

.topIndex {
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: flex;
    &__left {
      width: 50%;
      height: 100%;
      background-color: $black;
    }

    &__right {
      width: 50%;
      height: 100%;
      background-color: $white;
    }
  }

  .main {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &__ttl {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      box-sizing: border-box;
      color: $white;
      height: 50%;
      width: 100%;
      text-align: center;
      font-size: 10rem;
      letter-spacing: 0.2rem;
      span {
        color: $black;
      }
    }

    &__list {
      height: 50%;
      width: 48.4rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-top: 10%;
      box-sizing: border-box;
    }
    &__item {
      cursor: pointer;
      width: 14rem;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      font-size: 1.6rem;
      background-color: $subBlack;
      color: $white;
      border-radius: 0.8rem;
    }
  }
}
</style>
