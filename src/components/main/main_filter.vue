<template>
  <div class="mainFilter">
    <div class="blackBox"></div>
    <div class="main">
      <div class="head">
        <h4 class="head__title">フィルター</h4>
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
            <button class="category__text" @click="clickCategoryBtn(i)">{{c.selectText}}</button>
          </li>
        </ul>
      </div>

      <div class="footer">
        <button class="footer__confirmBtn" @click="confirmBtn()">フィルター確定</button>
      </div>
    </div>
    <div class="categoryBox" v-if="categorySelectBox">
      <div class="categoryBox__head">
        <h4 class="categoryBox__title">{{nowCategory.categoryTitle}}</h4>
        <button class="categoryBox__allSelect" @click="allChangeNowSelectState()">全選択</button>
      </div>
      <ul class="categoryBox__list">
        <li
          v-for="(text, index) in nowCategory.filterText"
          :class="['categoryBox__item',{'categoryBox__item--active':isActive(index)}]"
          :key="'filterText'+index"
          @click="changeNowSelectState(index)"
        >
          <div class="categoryBox__check">a</div>
          {{text}}
        </li>
      </ul>
      <div class="categoryBox__footer">
        <button
          class="categoryBox__footerBtn categoryBox__footerBtn--false"
          @click="closeCategorySelectBox()"
        >キャンセル</button>
        <button
          class="categoryBox__footerBtn categoryBox__footerBtn--true"
          @click="confirmCategory()"
        >カテゴリ確定</button>
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
export default class mainFilter extends Vue {
  @Prop() private filterTexts!: string[];
  @Prop() private filterCategory!: categoryFilter;

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

  private category: category[] = [
    {
      category: "place",
      categoryTitle: "該当スペース",
      select: [
        "駿河台ホール",
        "E教室",
        "３階廊下",
        "エントランス",
        "会議室",
        "LabProto",
        "カフェテリア",
        "メディアライブラリー",
        "大学事務局",
        "リモート会議室",
        "職員室",
        "学生スマートフォン",
        "職員スマートフォン"
      ],
      selectText: "All",
      filterText: [
        "駿河台ホール",
        "教室",
        "E教室",
        "３階廊下",
        "エントランス",
        "会議室",
        "LabProto",
        "カフェテリア",
        "メディアライブラリー",
        "大学事務局",
        "リモート会議室",
        "職員室",
        "学生スマートフォン",
        "職員スマートフォン"
      ]
    },
    {
      category: "target",
      categoryTitle: "ターゲット",
      select: ["学生", "先生", "事務局", "外部"],
      selectText: "All",
      filterText: ["学生", "先生", "事務局", "外部"]
    },
    {
      category: "child",
      categoryTitle: "子ソリューションの有無",
      select: ["有り", "無し"],
      selectText: "All",
      filterText: ["有り", "無し"]
    },
    {
      category: "explanation",
      categoryTitle: "説明の有無",
      select: ["有り", "無し"],
      selectText: "All",
      filterText: ["有り", "無し"]
    },
    {
      category: "targetStory",
      categoryTitle: "ターゲットストーリの有無",
      select: ["有り", "無し"],
      selectText: "All",
      filterText: ["有り", "無し"]
    },
    {
      category: "usetech",
      categoryTitle: "使用想定技術",
      select: [],
      selectText: "All",
      filterText: []
    }
  ];

  private nowCategory: category = {
    category: "",
    categoryTitle: "",
    select: [],
    selectText: "",
    filterText: []
  };

  private nowSelectState: boolean[] = [];

  private setNowSelectState() {
    this.nowSelectState = this.nowCategory.filterText.map((t, i) => {
      let bool: boolean = false;
      this.nowCategory.select.forEach(selectText => {
        if (selectText === t) {
          bool = true;
        }
      });
      return bool;
    });
  }
  private changeNowSelectState(i: number) {
    this.$set(this.nowSelectState, i, !this.nowSelectState[i]);
  }
  private allChangeNowSelectState() {
    let selectState: boolean[] = this.nowSelectState;
    let allSelectState: boolean = false;
    for (let i = 0; i < selectState.length; i++) {
      if (!selectState[i]) {
        allSelectState = true;
      }
    }
    selectState.forEach((d, l) => {
      this.$set(this.nowSelectState, l, allSelectState);
    });
  }

  private confirmCategory() {
    let newSelect: string[] = [];
    this.nowCategory.filterText.forEach((t, i) => {
      if (this.nowSelectState[i]) {
        newSelect.push(t);
      }
    });

    let newSelectText: string = "";
    if (newSelect.length == this.nowCategory.filterText.length) {
      newSelectText = "All";
    } else {
      newSelect.forEach((t, i) => {
        if (i === newSelect.length - 1) {
          newSelectText += t;
        } else {
          newSelectText += t + " , ";
        }
      });
    }
    this.nowCategory.select = newSelect;
    this.nowCategory.selectText = newSelectText;
    this.closeCategorySelectBox();
    this.mergeCategory();
  }

  private mergeCategory() {
    this.category.forEach((c, i) => {
      if (c.category === this.nowCategory.category) {
        this.category[i] = this.nowCategory;
      }
    });
  }

  private isActive(i: number) {
    return this.nowSelectState[i];
  }

  private setNowCategory(i: number) {
    this.nowCategory = this.category[i];
  }

  private categorySelectBox: boolean = false;
  private openCategorySelectBox() {
    this.categorySelectBox = true;
  }
  private closeCategorySelectBox() {
    this.categorySelectBox = false;
  }

  private clickCategoryBtn(i: number) {
    this.setNowCategory(i);
    this.openCategorySelectBox();
    this.setNowSelectState();
  }

  private confirmBtn() {
    const filter: filterCont = {
      filterText: this.newFilterText,
      filterCategory: this.category
    };
    this.$emit("reload", filter);
    this.$emit("close");
  }

  private close() {
    this.$emit("close");
  }

  created() {
    this.newFilterText = this.filterTexts;
    this.category.forEach((data, i) => {
      if (data.category == "place") {
        this.category[i].select = this.filterCategory.place;
        if (data.filterText.length == this.filterCategory.place.length) {
          this.category[i].selectText = "All";
        } else {
          let text: string = "";
          this.filterCategory.place.forEach((t, i) => {
            if (i == this.filterCategory.place.length - 1) {
              text += t;
            } else {
              text += t + " , ";
            }
          });
          this.category[i].selectText = text;
        }
      }
      if (data.category == "target") {
        this.category[i].select = this.filterCategory.target;
        if (data.filterText.length == this.filterCategory.target.length) {
          this.category[i].selectText = "All";
        } else {
          let text: string = "";
          this.filterCategory.target.forEach((t, i) => {
            if (i == this.filterCategory.target.length - 1) {
              text += t;
            } else {
              text += t + " , ";
            }
          });
          this.category[i].selectText = text;
        }
      }
      if (data.category == "child") {
        this.category[i].select = this.filterCategory.child;
        if (data.filterText.length == this.filterCategory.child.length) {
          this.category[i].selectText = "All";
        } else {
          let text: string = "";
          this.filterCategory.child.forEach((t, i) => {
            if (i == this.filterCategory.child.length - 1) {
              text += t;
            } else {
              text += t + " , ";
            }
          });
          this.category[i].selectText = text;
        }
      }

      if (data.category == "explanation") {
        this.category[i].select = this.filterCategory.explanation;
        if (data.filterText.length == this.filterCategory.explanation.length) {
          this.category[i].selectText = "All";
        } else {
          let text: string = "";
          this.filterCategory.explanation.forEach((t, i) => {
            if (i == this.filterCategory.explanation.length - 1) {
              text += t;
            } else {
              text += t + " , ";
            }
          });
          this.category[i].selectText = text;
        }
      }

      if (data.category == "targetStory") {
        this.category[i].select = this.filterCategory.targetStory;
        if (data.filterText.length == this.filterCategory.targetStory.length) {
          this.category[i].selectText = "All";
        } else {
          let text: string = "";
          this.filterCategory.targetStory.forEach((t, i) => {
            if (i == this.filterCategory.targetStory.length - 1) {
              text += t;
            } else {
              text += t + " , ";
            }
          });
          this.category[i].selectText = text;
        }
      }

      if (data.category == "usetech") {
        this.category[i].select = this.filterCategory.usetech;
        if (data.filterText.length == this.filterCategory.usetech.length) {
          this.category[i].selectText = "All";
        } else {
          let text: string = "";
          this.filterCategory.usetech.forEach((t, i) => {
            if (i == this.filterCategory.usetech.length - 1) {
              text += t;
            } else {
              text += t + " , ";
            }
          });
          this.category[i].selectText = text;
        }
      }
    });
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";

.mainFilter {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .blackBox {
    z-index: 9999999999;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $black;
    opacity: 0.5;
  }

  .main {
    z-index: 99999999999;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
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
        overflow-y: scroll;
      }

      &__item {
        float: left;
        display: flex;
        align-items: center;
        margin-right: 0.8rem;
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
        height: calc(100% - 2.5rem);
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
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
          width: 95%;
          height: 2rem;
          border: none;
          border-radius: 0.4rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          background-color: $white;

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

  .categoryBox {
    padding: 1.6rem;
    color: $white;
    z-index: 99999999999;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 35rem;
    background-color: $black;
    border-right: 1px solid #666;
    box-sizing: border-box;

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
    }

    &__title {
      font-size: 1.8rem;
    }

    &__allSelect {
      font-size: 1.2rem;
      width: 6rem;
      height: 2.3rem;
      border: none;
      border-radius: 0.4rem;
      background-color: $mainBlue;
      color: $white;
    }

    &__list {
      height: calc(100% - 6rem - 6rem - 3.2rem);
      overflow-y: scroll;
    }

    &__item {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
      &--active .categoryBox__check {
        background-color: $mainBlue;
      }
    }

    &__check {
      box-sizing: border-box;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 0.4rem;
      background-color: $white;
      margin-right: 1.6rem;
    }

    &__footer {
      height: 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: #666 1px solid;
    }

    &__footerBtn {
      cursor: pointer;
      width: 45%;
      height: 3rem;
      border-radius: 0.4rem;
      border: none;
      color: $white;

      &--false {
        background-color: $alert;
      }

      &--true {
        background-color: $mainBlue;
      }
    }
  }
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 0 2px #777;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
  box-shadow: none;
}

@media screen and (max-width: 800px) {
  .mainFilter {
    .main {
      width: 100%;
    }

    .categoryBox {
      width: 100%;
    }
  }
}
</style>