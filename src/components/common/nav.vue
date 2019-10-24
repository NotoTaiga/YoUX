<template>
  <div class="nav">
    <div class="nav__ttl">
      <div class="menuIcon icon"></div>閉じる
    </div>
    <nav>
      <ul class="nav__list">
        <li class="nav__item nav__item--home">
          <div class="homeIcon icon"></div>Home
        </li>
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

  mounted(): void {}
  computed() {}
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.nav {
  height: calc(100vh - 5rem);
  width: 15rem;
  background-color: $black;
  font-size: 1.2rem;
  overflow: hidden;

  &__ttl {
    margin: 3.2rem auto 1.6rem;
    height: 3rem;
    font-size: 1.5rem;
    width: calc(15rem - 3.2rem);
    color: $white;
    display: flex;
    align-items: center;
  }

  &__item {
    margin: 0 auto 0.8rem;
    height: 3rem;
    width: calc(15rem - 3.2rem);
    color: $white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.8rem;
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