<template>
  <div class="nav" :class="{nav__close: navClose}" v-if="getPageId() !== 0">
    <div class="nav__ttl" @click="changeNavClose">
      <div class="menuIcon icon"></div>閉じる
    </div>
    <nav>
      <ul class="nav__list">
        <router-link v-for="(state,i) in navStates" :key="'navItem' + i" :to="state.pageLink">
          <li class="nav__item" :class="['nav__item--'+state.pageClass , {'nav__item--activ' : checkSelect(i)}]" @click="changePageId(i)">
            <div class="icon" :class="state.pageClass + 'Icon'"></div>
            {{state.pageText}}
          </li>
        </router-link>
      </ul>
    </nav>

    <div class="closeOpen"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface navState {
  pageLink: string;
  pageText: string;
  pageClass: string;
}

@Component
export default class MasterNav extends Vue {
  //   @Prop() private msg!: string;
  private name: string = "";

  private navClose: boolean = true;
  private changeNavClose() {
    this.navClose = !this.navClose;
  }

  private navStates: navState[] = [
    {
      pageLink: "/",
      pageText: "Home",
      pageClass: "home"
    },
    {
      pageLink: "/main",
      pageText: "資料一覧",
      pageClass: "main"
    },
    {
      pageLink: "/map",
      pageText: "イメージマップ",
      pageClass: "map"
    },
    {
      pageLink: "/other",
      pageText: "その他資料",
      pageClass: "other"
    }
  ];


  private checkSelect(index:number){
    return this.getPageId() == index;
  }

  private changePageId(index:number) {
    this.$store.dispatch("changePageId", index);
  }

  private getPageId(){
    return this.$store.getters.getPageId;
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
  top: 5rem;
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