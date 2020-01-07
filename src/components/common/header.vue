<template>
  <header class="header">
    <div class="inner">
      <h1 class="header__ttl">
        <router-link to="/" @click="changePageId(0)">YoUX</router-link>
      </h1>
      <h2 class="header__pageName">{{pageName[nameChange()]}}</h2>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class header extends Vue {
  private changePageId(i: number) {
    return this.$store.dispatch("changePageId", i);
  }
  //   @Prop() private msg!: string;
  private name: string = "";
  private pageName: string[] = [
    "HOME",
    "YoUXって？",
    "ソリューション一覧",
    "その他資料"
  ];
  mounted(): void {
    this.nameChange();
  }

  computed() {}

  private nameChange() {
    return this.$store.getters.getPageId;
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.header {
  a {
    color: $white;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 999999;
  &__ttl {
    position: absolute;
    height: 5rem;
    line-height: 5rem;
    top: 0;
    left: 3.2rem;
    font-size: 1.4rem;
    color: $white;
  }

  &__pageName {
    position: absolute;
    height: 5rem;
    line-height: 5rem;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: $white;
  }
  .inner {
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
    background-color: $mainBlue;
    position: relative;
  }
}
</style>