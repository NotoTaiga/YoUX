<template>
  <div class="nav" :class="{nav__close: navClose}">
    <div class="nav__ttl" @click="changeNavClose">
      <div class="menuIcon icon"></div>閉じる
    </div>
    <nav>
      <ul class="nav__list">
        <router-link to="/">
          <li class="nav__item nav__item--home">
            <div class="homeIcon icon"></div>Home
          </li>
        </router-link>
        <li class="nav__item">
          <div class="mainIcon icon"></div>資料一覧
        </li>
        <li class="nav__item">
          <div class="mapIcon icon"></div>イメージマップ
        </li>
        <li class="nav__item">
          <div class="otherIcon icon"></div>その他資料
        </li>
      </ul>
    </nav>

    <div class="closeOpen"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MasterNav extends Vue {
  //   @Prop() private msg!: string;
  private name: string = "";
  private navClose: boolean = true;
  private changeNavClose(){
    this.navClose = !this.navClose;
  }

  mounted(): void {}
  computed() {}
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.nav {
  position: absolute;
  left: 0;
  top:5rem;
  z-index: 99;
  height: calc(100vh - 5rem);
  width: 15rem;
  background-color: $black;
  font-size: 1.2rem;
  overflow: hidden;
  transition: all 300ms 0s ease;

  &__close {
    width: calc(1.6rem * 2 + 1.5rem);
  }

  &__ttl {
    margin: 3.2rem 0 0;
    padding: 1.6rem;
    height: 3rem;
    font-size: 1.2rem;
    width: calc(15rem - 3.2rem);
    color: $white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__item {
    // box-sizing: border-box;
    padding: 0 1.6rem;
    margin: 0.8rem 0 1.6rem;
    height: 3rem;
    width: calc(15rem - 3.2rem);
    color: $white;
    display: flex;
    align-items: center;
    cursor: pointer;

    &--activ {
      background-color: $mainBlue;
    }
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1.6rem;
  }

  .menuIcon {
    background-image: url("../../assets/img/nav.png");
    background-size: contain;
  }

  .homeIcon {
    background-image: url("../../assets/img/home.png");
    background-size: contain;
  }

  .mainIcon {
    background-image: url("../../assets/img/main.png");
    background-size: contain;
  }

  .mapIcon {
    background-image: url("../../assets/img/map.png");
    background-size: contain;
  }

  .otherIcon {
    background-image: url("../../assets/img/other.png");
    background-size: contain;
  }
}
</style>