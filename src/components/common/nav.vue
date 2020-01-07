<template>
  <div class="masterNav">
    <div class="black" v-if="!navClose"></div>
    <div class="nav" :class="{nav__close: navClose}" v-if="getPageId() !== 0">
      <div class="nav__ttl" @click="changeNavClose">
        <div class="menuIcon icon"></div>閉じる
      </div>
      <nav>
        <ul class="nav__list">
          <router-link v-for="(state,i) in navStates" :key="'navItem' + i" :to="state.pageLink">
            <li
              class="nav__item"
              :class="['nav__item--'+state.pageClass , {'nav__item--activ' : checkSelect(i)}]"
              @click="changePageId(i)"
            >
              <div class="icon" :class="state.pageClass + 'Icon'"></div>
              {{state.pageText}}
            </li>
          </router-link>
          <a href="https://drive.google.com/open?id=1oBKfaqBLTV3GwQDy3Eno9lonzR9B0ryX">
            <li class="nav__item">
              <div class="icon fileIcon"></div>資料を見る
            </li>
          </a>
        </ul>
      </nav>

      <div class="closeOpen"></div>
    </div>
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
  private closeNav() {
    this.navClose = true;
  }
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
      pageLink: "/description",
      pageText: "YoUXって？",
      pageClass: "description"
    },
    {
      pageLink: "/main",
      pageText: "資料一覧",
      pageClass: "main"
    }
  ];

  private checkSelect(index: number) {
    return this.getPageId() == index;
  }

  private changePageId(index: number) {
    this.closeNav();
    this.$store.dispatch("changePageId", index);
  }

  private getPageId() {
    return this.$store.getters.getPageId;
  }

  mounted(): void {}
  computed() {}
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.masterNav {
  .black {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.5;
    z-index: 99;
  }
}
.nav {
  position: absolute;
  left: 0;
  top: 5rem;
  z-index: 999;
  height: calc(100% - 5rem);
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
    background-repeat: no-repeat;
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

  .descriptionIcon {
    background-image: url("../../assets/img/YoUXtte.png");
    background-size: contain;
  }

  .fileIcon {
    background-image: url("../../assets/img/other.png");
    background-size: contain;
  }
}

@media screen and (max-width: 800px) {
  .nav {
    width: 100%;
    &__close {
      width: calc(1.6rem * 2 + 1.5rem);

      .nav__ttl {
        width: calc(15rem - 3.2rem);
        justify-content: flex-start;
      }
      .nav__item {
        width: calc(15rem - 3.2rem);
        justify-content: flex-start;
      }
    }

    &__ttl {
      margin: 1.6rem auto;
      width: 80%;
      justify-content: center;
    }
    &__item {
      margin: 1.6rem auto;
      width: 80%;
      justify-content: center;
    }
  }
}
</style>