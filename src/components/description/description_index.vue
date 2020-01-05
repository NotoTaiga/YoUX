<template>
  <div class="description">
    <div class="content firstCont">
      <p class="MFont">
        作品を見ていただく前に、
        <br />
        <span class="LFont blueFont">YoUX</span>という卒業制作について
        <br />少し話させてください。
      </p>
      <a href="#" v-scroll-to="'#top'" v-if="scrollIcon">
        <div class="down">
          <span></span>Scroll
        </div>
      </a>
    </div>
    <div class="content" id="top">
      <p class="LFont">僕は今の大学生活に満足しています。</p>
      <p class="SFont">大学を通して</p>
      <p class="SFont">知らないことを知り、</p>
      <p class="SFont">自分で自分の未来を見つめ、</p>
      <p class="SFont">自分でやりたいことを見つけ、</p>
      <p class="SFont">
        なりたい
        <span class="LFont blueFont">社会人</span>へと変わっていく。
      </p>
    </div>
    <div class="content">
      <p class="LFont">ただ、</p>
      <p class="SFont">10年後、大学の在り方が今と同じだったら</p>
      <p class="SFont">きっと僕は満足していません</p>
    </div>
    <div class="content">
      <p class="SFont">しかし、時が流れていくように</p>
      <p class="SFont">
        <span class="LFont blueFont">テクノロジー</span>も同じように進歩していきます。
      </p>
      <p class="SFont">それは誰かが想像し作っている。</p>
    </div>
    <div class="content">
      <p class="LFont">誰かが...</p>
    </div>
    <div class="content">
      <p class="LFont">誰でも良いなら</p>
      <p class="LFont">僕が</p>
      <p class="SFont">
        <span class="blueFont LFont">未来</span>の大学を想像したい
      </p>
    </div>
    <div class="content">
      <p class="MFont">
        そして新しい
        <span class="blueFont">テクノロジー</span>を
      </p>
      <p class="MFont">一人一人に合った形で使ってほしい。</p>
      <p class="MFont">大学を自分自信を見つめやすい場所ととらえてほしい。</p>
    </div>
    <div class="content textCenter">
      <p class="MFont">こんな想いから</p>
      <p class="MFont">
        あなたのための
        <span class="blueFont LFont">UX</span>
        として
      </p>
      <p class="LFont blueFont">YoUX</p>
      <p class="MFont">を始めました。</p>
    </div>
    <div class="content">
      <p class="MFont">卒業制作としてゆだねられた</p>
      <p class="LFont">1,000時間</p>
      <p class="SFont">
        この時間をフルに使用し
        <br />10年後実現しそうなシステムを考えました。
      </p>
      <p class="SFont">
        僕らはこのシステムの事を
        <br />
        <span class="MFont blueFont">ソリューション</span>
        <br />と呼び、繋がりも意識して色々と考えてみました。
      </p>
    </div>

    <div class="content">
      <p class="SFont">とりあえず3個ピックアップしてみました。</p>
      <p class="SFont">名前の響きで気になるものはありませんか？</p>
      <p class="MFont">クリックして確認してみてください。</p>
      <div class="btnCont">
        <button @click="clickBtn(0)">DEN</button>
        <button @click="clickBtn(1)">DEN 会議室保存</button>
        <button @click="clickBtn(2)">DEN 自動議事録</button>
      </div>
    </div>

    <div class="content">
      <p class="SFont">このようなものを何個も考えてみました。</p>
      <p class="SFont">面白いなと思っていただけたら嬉しいです。</p>
    </div>

    <div class="content">
      <p class="SFont">さて、卒業制作展で見ている方は気づいているかもしれませんが...</p>
      <p class="SFont">今目の前に広がっている関係図これをこのサイトにまとめてあります。</p>
      <p class="SFont">
        もし良ければソリューションリストから
        <br />あなたの興味のあるものを見てみてください。
      </p>
      <p class="LFont blueFont">YoUX</p>
      <router-link to="/main" @click="chengePageId(1)">
        <button>ソリューションリストへ</button>
      </router-link>
      <router-link to="/other" @click="chengePageId(1)">
        <button>資料を見てみる</button>
      </router-link>
    </div>
    <mainExplanation v-if="openExplanation" :dataSet="clickDataSet" @close="toggleExplanation()"></mainExplanation>
  </div>
</template>

<script lang="ts">
import { dataSet } from "../../interface";
import { Component, Prop, Vue } from "vue-property-decorator";
import mainExplanation from "@/components/main/main_explanation.vue";
import { QuerySelector } from "ag-grid-community";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);

@Component({
  components: {
    mainExplanation
  }
})
export default class description extends Vue {
  @Prop() private dataSet!: dataSet;

  private changePageId(i: number) {
    return this.$store.dispatch("changePageId", i);
  }

  private dataArr: dataSet[] = [
    {
      id: 101,
      name: "DEN",
      place: ["DEN"],
      target: ["学生", "先生", "事務局", "外部"],
      targetStory: {},
      usetech: [],
      text: [
        "一般的にDENとは書斎などの小部屋を指す言葉です。",
        "ただ、本当に書斎に籠るような使い方をされてしまっては使いたい学生に行き渡らず困ってしまいます。",
        "ですので、ここを会議室と位置づけ様々なソリューションを考えてみました。",
        "プロジェクト、授業課題に応じて変化していく会議室をテーマにソリューションを考えてみました。",
        "関連ソリューションからDENに紐づいたソリューションを見てみて下さい！"
      ],
      img: require("@/assets/img/den.jpg"),
      child: [
        "DEN 予約",
        "DEN 会議室保存",
        "DEN 自動議事録",
        "DEN 会議室の初期設定",
        "DEN ちょっと休憩"
      ]
    },
    {
      id: 103,
      name: "DEN 会議室保存",
      place: ["DEN"],
      target: ["学生", "先生", "事務局", "外部"],
      targetStory: {},
      usetech: [],
      text: [
        "会社で会議をする場合、長時間にわたり会議室を押さえ１つのプロジェクトのために部屋を使う事ができます。",
        "しかし大学の場合時間が来ると出なければならずいちいち片付けをしなければいけません。",
        "同じ環境が続けば思いつく事もあるだろうに…",
        "そんな思いを叶えたくこのソリューションを考えました。",
        "ホワイトボードを電子化し自分の今行っているプロジェクトに対して会議室の状態を保存しておけるというものです。",
        "未来の技術という事で現実での書き心地を表現できると考えています。"
      ],
      img: require("@/assets/img/den.jpg"),
      child: ["DEN"]
    },
    {
      id: 104,
      name: "DEN 自動議事録",
      place: ["DEN"],
      target: ["学生", "先生", "事務局", "外部"],
      targetStory: {},
      usetech: [],
      text: [
        "会議室にマイクを設置し会議を録音する機能を考えています。",
        "しかし、1時間半の会議をしたとしてこれを聞き返し改めて議事録などをつける…",
        "あまりにも非効率です。",
        "これを避けるために会議時の盛り上がりや、ホワイトボードの書き方から計算し決定事項など必要なもののみをピックアップし議事録を自動で作成します。",
        "また、会議を重ねる毎にプロジェクトメンバーが好む議事録へと変化していくAI学習システムを考えています。"
      ],
      img: require("@/assets/img/memo.jpg"),
      child: ["DEN"]
    }
  ];
  private clickDataSet: dataSet | null = null;
  private chengeClickDataSet(i: number) {
    this.clickDataSet = this.dataArr[i];
  }

  private clickBtn(i: number) {
    this.chengeClickDataSet(i);
    this.toggleExplanation();
  }

  private openExplanation: boolean = false;
  private toggleExplanation() {
    this.openExplanation = !this.openExplanation;
  }

  private contentStateArr: boolean[] = [];
  private contentElementArr: any = [];

  private scrollIcon: boolean = true;
  mounted(): void {
    this.changePageId(2);
    const description = document.querySelector(".description");
    this.contentElementArr = document.querySelectorAll(".content");
    this.contentElementArr.forEach(() => {
      this.contentStateArr.push(false);
    });
    this.contentStateArr[0] = true;
    this.contentElementArr[0].classList.add("show");
    window.addEventListener("scroll", () => {
      const scrollY: any = window.pageYOffset;
      this.contentStateArr.forEach((bool, i) => {
        const elementOffset = this.contentElementArr[i].offsetTop;
        if (scrollY > elementOffset - 300) {
          this.contentStateArr[i] = true;
          this.contentElementArr[i].classList.add("show");
        }
      });

      if (this.contentStateArr[1]) {
        this.scrollIcon = false;
      } else {
        this.scrollIcon = true;
      }
    });
  }

  created() {}
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
button {
  cursor: pointer;
}
.description {
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
  // height: calc(100% - 50px);
  // overflow-y: scroll;
  .content {
    opacity: 0;
    padding: 15rem 0;
    width: 100%;
    box-sizing: border-box;
    line-height: 4rem;
    p {
      margin-bottom: 3rem;
    }
    button {
      margin: 2rem 1rem 2rem;
      width: 200px;
      height: 40px;
      border-radius: 4px;
      border: 2px solid $mainBlue;
      background-color: $mainBlue;
      color: $white;
    }
  }

  a {
    color: #333;
  }

  .btnCont {
    padding: 0 0 15rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    button {
      cursor: pointer;
      margin: 0 1rem 2rem;
      width: 150px;
      height: 40px;
      border-radius: 4px;
      border: 2px solid $mainBlue;
      background-color: $mainBlue;
      color: $white;
    }
  }

  .down {
    padding-top: 40px;
    position: fixed;
    bottom: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 1.2rem;
    img {
      width: 24px;
      height: auto;
    }
    .text {
      font-size: 1.2rem;
    }
  }

  .firstCont {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .down span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #333;
    border-bottom: 1px solid #333;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      -webkit-transform: rotate(-45deg) translate(-10px, 10px);
    }
    40% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
  }
  @keyframes sdb {
    0% {
      transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      transform: rotate(-45deg) translate(-10px, 10px);
    }
    40% {
      transform: rotate(-45deg) translate(0, 0);
    }
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

.show {
  animation: rotation 2s ease 0s 1 alternate none running;
  opacity: 1 !important;
}

.textLeft {
  text-align: left;
}
.textCenter {
  text-align: center;
}
.blueFont {
  color: $mainBlue;
}
.LFont {
  font-size: 4rem;
}
.MFont {
  font-size: 3rem;
}
.SFont {
  font-size: 2rem;
}
.borderBottom {
  border-bottom: 2px solid $mainBlue;
}

@media screen and (max-width: 800px) {
}
</style>