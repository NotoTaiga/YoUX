<template>
  <div class="mainFilter">
    <div class="blackBox"></div>
    <div class="main">
      <div class="head">
        <h4 class="head__title">フィルター</h4>
        <div class="head__close">×</div>
      </div>

      <div class="textFilterBox">
        <h5 class="textFilterBox__title">テキストフィルター</h5>
        <div class="textFilterBox__inputBox">
          <input id="textFilterInput" type="text" class="textFilterBox__input" />
          <button class="textFilterBox__btn" @click="addNewFilterText()">追加</button>
        </div>
        <ul class="textFilterBox__list">
          <li class="textFilterBox__item" v-for="(text, i) in newFilterText" :key="'filterText'+i">
            <div class="itemName">{{text}}</div>
            <button class="deleteBtn" @click="spliceNewFilterText(i)">×</button>
          </li>
        </ul>
      </div>

      <div class="categoryFilter">
        <h5 class="categoryFilter__title">カテゴリフィルター</h5>
        <ul class="categoryFilter__list">
          <li class="categoryFilter__item category" v-for="(c, i) in category" :key="'category'+i">
            <h6 class="category__title">{{c.categoryTitle}}</h6>
            <button class="category__text">{{c.selectText}}</button>
          </li>
        </ul>
      </div>

      <div class="footer">
        <button class="footer__confirmBtn" @click="confirmBtn()">フィルター確定</button>
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
export default class mainFilter extends Vue {
  @Prop() private filterTexts!: string[];

  private newFilterText: string[] = [];
  private addNewFilterText() {
    const inputBox: any = document.querySelector("#textFilterInput");
    if (inputBox.value) {
      let isText: boolean = false;
      this.newFilterText.forEach(t => {
        if (t == inputBox.value) isText = true;
      });
      if (!isText) {
        this.newFilterText.push(inputBox.value);
      }
    }
  }
  private spliceNewFilterText(i: number) {
    this.newFilterText.splice(i, 1);
  }

  private category = [
    {
      category: "place",
      categoryTitle: "該当スペース",
      select: [],
      selectText: "All",
      filterText: []
    },
    {
      category: "target",
      categoryTitle: "ターゲット",
      select: [],
      selectText: "All",
      filterText: []
    },
    {
      category: "child",
      categoryTitle: "子ソリューションの有無",
      select: [],
      selectText: "All",
      filterText: []
    },
    {
      category: "explanation",
      categoryTitle: "説明の有無",
      select: [],
      selectText: "All",
      filterText: []
    },
    {
      category: "targetStory",
      categoryTitle: "ターゲットストーリの有無",
      select: [],
      selectText: "All",
      filterText: []
    },
    {
      category: "usetech",
      categoryTitle: "使用想定技術",
      select: [],
      selectText: "All",
      filterText: []
    }
  ];

  private confirmBtn() {
    this.$emit("reload", this.newFilterText);
    this.$emit("close");
  }

  beforeMount() {
    this.newFilterText = this.filterTexts;
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.mainFilter {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  .blackBox {
    z-index: 9999999999;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: $black;
    opacity: 0.5;
  }

  .main {
    z-index: 99999999999;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 35rem;
    background-color: $black;
    color: $white;
    box-sizing: border-box;
    padding: 1.6rem;
    .head {
      display: flex;
      justify-content: space-between;
      font-size: 1.8rem;
      height: 4rem;
    }

    .textFilterBox {
      height: 30vh;
      border-bottom: 1px solid #666;
      &__title {
        font-size: 1.4rem;
        height: 2.5rem;
      }

      &__inputBox {
        display: flex;
        justify-content: space-between;
        height: 2.3rem;
      }
      &__input {
        width: 23rem;
        border-radius: 0.4rem;
        border: none;
      }
      &__btn {
        font-size: 1.4rem;
        width: 6rem;
        height: 2.3rem;
        border: none;
        border-radius: 0.4rem;
        color: $white;
        background-color: $mainBlue;
      }

      &__list {
        box-sizing: border-box;
        height: calc(100% - 2.5rem - 2.3rem);
        padding: 0.8rem 0;
      }

      &__item {
        display: flex;
        align-items: center;
        margin-bottom: 0.8rem;
        cursor: pointer;

        .itemName {
          font-size: 1.4rem;
          margin-right: 0.8rem;
        }

        .deleteBtn {
          font-size: 1.4rem;
          width: 1.2rem;
          height: 1rem;
          border-radius: 0.2rem;
          line-height: 1rem;
          padding: 0;
          cursor: pointer;
          border: none;

          &:hover {
            background-color: $alert;
            color: $white;
          }
        }
      }
    }

    .categoryFilter {
      height: calc(100% - 30vh - 4rem - 4rem);
      box-sizing: border-box;
      padding-top: 0.8rem;
      &__title {
        height: 2.5rem;
        font-size: 1.4rem;
      }

      &__list {
        height: calc(100%  - 2.5rem);
        width: 100%;
      overflow-y: scroll;
      }

      .category {
        margin-bottom: 1.2rem;
        &__title {
          width: 100%;
          height: 2rem;
          font-size: 1.2rem;
        }

        &__text {
          cursor: pointer;
          position: relative;
          text-align: left;
          box-sizing: border-box;
          padding: 0 0.8rem;
          width: 100%;
          height: 2rem;
          border: none;
          border-radius: 0.4rem;

          &:before {
            position: absolute;
            content: "▼";
            top: 0;
            right: -1px;
            height: 2rem;
            width: 1.5rem;
            background-color: $mainBlue;
            color: $white;
            line-height: 2rem;
            text-align: center;
            border-radius: 0 0.4rem 0.4rem 0;
          }
        }
      }
    }

    .footer {
      height: 4rem;
      line-height: 4rem;
      text-align: center;

      &__confirmBtn {
        cursor: pointer;
        width: 18rem;
        height: 3rem;
        border: none;
        border-radius: 0.4rem;
        background-color: $mainBlue;
        color: $white;
      }
    }
  }
}
</style>