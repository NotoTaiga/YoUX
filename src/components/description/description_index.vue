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
      <p class="LFont">
        なら僕が
        <br />10年後の大学を想像したい
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
        <br />と呼び、数にして約200個ほど考えてきました。
      </p>
    </div>

    <div class="content">
      <p class="SFont">自信のあるものを3個ピックアップしてみました</p>
      <p class="SFont">名前の響きで気になるものでいいので見ていただけませんか？</p>
      <div class="btnCont">
        <button @click="clickBtn(0)">MyColor</button>
        <button @click="clickBtn(1)">デスクcloud</button>
        <button @click="clickBtn(2)">空間時間</button>
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
      id: 24,
      name: "MyColor",
      place: ["学生APP"],
      target: ["学生"],
      targetStory: {},
      usetech: [],
      text: [
        "MyColorとは文字通りではあるのですが、「自分の色」という意味です。",
        "自分ってどんな人なのか？自分って何ができるのか？",
        "そんな自分を見つめる際に色という形で「自分」を教えてくれます。",
        "具体的に色で表している事は大きく二つで、性格面の「メンタル色」、技術面の「テクニック色」です。",
        "メンタル色は5レンジャーの原理ををもとに設定しています。テクニック色はdhuで学べるwebや3DCGなど大きい科目の事を色で設定しています。",
        "ただこれらの色を普遍的な一色で設定するのでは未来ある大学生にとって少々もったいなく感じます。",
        "ですのでMyColorでは中間色を設けています。",
        "メンタル色でいうとリーダーである赤色の要素と冷静である青色の要素か混在している学生の場合「紫色」をメンタルカラーとして表示します。",
        "また最初は何にでも染まれる白色から始まり、自分の興味のあることや目指しているものに向けて勉学に励んでいるうちにMyColorはあなただけの色へと変化していきます。",
        "",
        "MyColorをきっかけに大学を「人生の夏休み」から「人生の分岐点へ」",
        "そんな思いが詰まったソリューションです。"
      ],
      img: require("@/assets/img/mycolor.jpg"),
      child: [
        "MyColor 卒業証書",
        "MyColor メンタル色",
        "MyColor テクニック色",
        "MyColor MyColor単位査定申請"
      ]
    },
    {
      id: 0,
      name: "デスクcloud",
      place: [
        "駿河台ホール",
        "教室",
        "エントランス",
        "DEN",
        "LabProto",
        "カフェテリア",
        "メディアライブラリー",
        "事務局",
        "職員室",
        "学生APP",
        "先生APP",
        "外部APP",
        "廊下",
        "その他",
        "該当なし"
      ],
      target: ["学生"],
      targetStory: {
        student: [
          "大学に登校する",
          "好きな教室、場所に移動する",
          "自動的な認証で出席登録",
          "自分の鞄やpcなどをデスクに置く",
          "2次元上のコンテンツと3次元上のコンテンツが混在した自分だけの空間で作業できる"
        ]
      },
      usetech: ["電子掲示板"],
      text: [
        "教科書のために無駄な荷物が増える、無駄な荷物を持ったまま電車に揺られる、授業中も使うか分からないのに。",
        "僕はこれを繰り返すうちに面倒だと考え小学生のころのように自分の机に教科書を置きっぱなしにして帰りたいなと思ってます。",
        "それなら実装してしまおう！机の状態をクラウド保存することでいつでもどこでも自分の机に。",
        "本がデータになるなら教科書もデータになる、それなら机だって板である必要はない。",
        "また、デスクが電子化することで与えることのできる役割は増えていきます。出席管理、グループワークの円滑化など未来の大学生活をよりよくする提案をしています。",
        "是非関連ソリューションで全貌を見てみてください！"
      ],
      img: require("@/assets/img/cloud.jpg"),
      child: [
        "授業中名刺交換",
        "グループトーク",
        "デスクcloud プラグイン",
        "デスクcloud ジェスチャー",
        "デスクcloud 資料表示",
        "感情サーモグラフィー",
        "デスクcloud 出席管理",
        "Day ToDo",
        "場所チャット",
        "デスクcloud 机プラグイン",
        "デスクcloud プラグイン"
      ]
    },
    {
      id: 91,
      name: "教室 空間時間",
      place: ["駿河台ホール", "教室"],
      target: ["学生", "先生", "事務局", "外部"],
      targetStory: {},
      usetech: [],
      text: [
        "小学校の頃外で遊んでいたときは夢中で遊んでいました。",
        "めちゃくちゃ楽しくて気づいたら日が落ち始めて。",
        "ただ、始業式の校長先生の話などは長く感じました。",
        "その時僕は何度も時計を見ていました。",
        "まだ1分しか経ってない…",
        "みたいな感じに。",
        "「見つめる鍋は煮えたたない」",
        "ことわざからもあるくらいです。",
        "ですので、授業中は壁掛け時計ではなく部屋の雰囲気で時間経過を感じれるようにしていきます。",
        "小学校時代のように気がついたら日が暮れている教室。",
        "時間に囚われない授業ができるようにと願いを込めてこのソリューションを考えました。"
      ],
      img: require("@/assets/img/spaceTime.jpg"),
      child: ["教室"]
    }
  ];
  private clickDataSet: dataSet = {
    id: 0,
    name: "デスクcloud",
    place: ["駿河台ホール"],
    target: ["学生"],
    targetStory: {
      student: [
        "大学に登校する",
        "好きな教室、場所に移動する",
        "自動的な認証で出席登録",
        "自分の鞄やpcなどをデスクに置く",
        "2次元上のコンテンツと3次元上のコンテンツが混在した自分だけの空間で作業できる"
      ],
      teacher: ["先生のやつ"]
    },
    usetech: ["電子掲示板"],
    text: ["aaaaaaaaaaaaaaa", "改行したい場合はこれで"],
    img: require("@/assets/img/neko.jpg"),
    child: [
      "授業中名刺交換",
      "グループトーク",
      "デスクcloud プラグイン",
      "デスクcloud ジェスチャー",
      "デスクcloud 資料表示",
      "感情サーモグラフィー",
      "デスクcloud 出席管理",
      "day ToDo",
      "場所チャット",
      "机模様替え"
    ]
  };
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