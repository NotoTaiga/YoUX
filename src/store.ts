import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface pageState {
  pageId: number;
  pageName: string;
}

export interface targetStory {
  student?: string[];
  teacher?: string[];
  admin?: string[];
  other?: string[];
  all?: string[];
}

export interface dataSet {
  id: number;
  name: string;
  place: string[];
  target: string[];
  targetStory: targetStory;
  usetech: string[];
  text: string[];
  img: any;
  child: string[];
}

export default new Vuex.Store({
  state: {
    pageId: 0,
    selectContent: 0,
    topItemCount: 0,
    masterData: [
      {
        id: 0,
        name: 'デスクcloud',
        place: ['駿河台ホール'],
        target: ['学生'],
        targetStory: {
          student: ['大学に登校する', '好きな教室、場所に移動する', '自動的な認証で出席登録', '自分の鞄やpcなどをデスクに置く', '2次元上のコンテンツと3次元上のコンテンツが混在した自分だけの空間で作業できる'],
          teacher: ['先生のやつ']
        },
        usetech: ['電子掲示板'],
        text: ['aaaaaaaaaaaaaaa', '改行したい場合はこれで'],
        img: require('./assets/img/neko.jpg'),
        child: ['授業中名刺交換', 'グループトーク', 'デスクcloud プラグイン', 'デスクcloud ジェスチャー', 'デスクcloud 資料表示', '感情サーモグラフィー', 'デスクcloud 出席管理', 'day ToDo', '場所チャット', '机模様替え'],
      }, {
        id: 1,
        name: '授業中名刺交換',
        place: ['教室'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: ['電子名刺を用意します。',
          'グループワークでいい成果を出すことができたにも関わらず後日そのメンバーを思い出すことが出来ない、なんてことがなくなります。',
          '詳しい内容は関連したソリューションとして用意してあるので表から子のソリューションをクリックして確認してみてください。'],
        img: null,
        child: []
      }, {
        id: 2,
        name: 'グループトーク',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['授業中に話している人の顔と声を一致させるための機能です。',
          '授業中名刺交換をした時に頂いた名刺が画面端に並べて表示され、名刺と同一人物が話すと名刺の外枠が青く光り誰が話しているかをわかりやすくします。',
          '留学生向けに母国語での名前表示も考えています。'],
        img: null,
        child: []
      }, {
        id: 3,
        name: 'デスクcloud プラグイン',
        place: ['no'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['デスククラウドでの拡張機能を追加することができます。',
          '大学の査定に通ったプラグインがプラグインストアに掲載されます。',
          'プラグインは自己制作することが可能です。機能面でのプラグインでも可能ですし、デザインのみのスキンという形でもストアに申請することは可能です。',
          '学内でプラグインを作ることが可能になるように授業内でやるプログラム言語での制作が基盤となります。'],
        img: null,
        child: []
      }, {
        id: 4,
        name: 'デスクcloud ジェスチャー',
        place: ['no'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['スマホのようなスライドやタップなどを組み合わせたジェスチャーを搭載します。またgoogle',
          'pixelのような空間認知システムを用いて3次元上のジェスチャーも取り入れることで2次元上では不可能だった命令方法を搭載することで数えきれないバリエーションの操作方法が存在します。',
          'プリセットのような初期設定は存在しますが個人での自由な設定も可能です。'],
        img: null,
        child: []
      }, {
        id: 5,
        name: 'デスクcloud 資料表示',
        place: ['All Space'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['教科書を持ち運ぶ必要はなくなります。',
          'すべて紙媒体などのアナログ教材はデスククラウドで表示、アプリで編集および管理することができます。',
          '授業外の配布ならばプリントならばスキャンをし、取り込みが可能。',
          'また授業中に先生が「ここ重要です！」などキーワードを言ったときは自動的にマーカーを引くなど自動的な補助を予定しています。',
          '教科書は授業料に含め必要なものを事前に購入・ダウンロードをしておく設定になっています。'],
        img: null,
        child: []
      }, {
        id: 6,
        name: '感情サーモグラフィー',
        place: ['All space'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['感情によるセンサーをデスククラウドに追加します。',
          '普段の平常時の表情を記憶し、揺れ動く大学生の感情のコントロールをお手伝いします。',
          'データの収集方法として入学初年度の1年間を情報取得期間として確保。',
          '2年次から取得した情報を使い、授業中の目線の切れる回数や瞬きの回数、授業中の表情などから体調やモチベーションの状態を記録。',
          '一人一人のデータを作成し比較をできるようにします。',
          'そのデータを用いて自動的に改善策を提案し、安定した状態へ導けるように寄り添っていきます。'
        ],
        img: null,
        child: ['名刺交換の感情記録', '疲れ度センサー', '捗り度']
      }, {
        id: 7,
        name: 'デスクcloud 出席管理',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['現在のデジタルハリウッドでは学生証をカードリーダーにタッチすることで出席管理をしていましたがそれを廃止し、デスククラウドのログインに必要な顔認証をもって出席とします。また制度確保のため椅子の感圧によって二重認証をかんがえています。',
          '座学授業など非アクティブ授業など先生が生徒の出席を管理することが困難な場合は上記の認証方法で80％以上の着席率を確認できた場合のみ出席とするなど先生の意志で出席方法をコントロールできるように考えています。',
          'おなかが痛いなど特別な事情がある場合はデスククラウドまたは学生APPから申請します。',
          'また電車の遅延などはデスククラウドを立ち上げたタイミングでルート確認を行い、遅延認証を自動で行います。'],
        img: null,
        child: []
      }, {
        id: 8,
        name: 'day ToDo',
        place: ['All place'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['明日から本気出す病から逃げるため・まず行動してほしい。これらの思いからこの機能を考えました。',
          '大学に来て最初に机に向かったとき、一日や一週間の目標タスクを設定する時間を設けます。またday todoは今日のはかどり度として一日のをわりに進捗具合、集中して作業で来ていたかなどを結果として確認できます。',
          'タスクの内容は簡単なものから大学の課題を推奨するタスクまで幅広く対応し、なおかつ自分でタスクを決めることができます。',
          '課題はパーセンテージで表示し、課題に関係した調査もその中に含みます。提出完了した時に初めて100％になります。',
          'また感情サーモグラフィーにも対応しているので、疲れているときは簡単なタスクを推奨したり体調不調を感知した場合は帰宅するよう促します。'],
        img: null,
        child: []
      }, {
        id: 9,
        name: '場所チャット',
        place: ['All place'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: ['教室やコワーキングスペースなどでのみ使えるチャットです。',
          '違う空間とのチャットは不可能で、同じ場にいる人間としかできないようになっておりその空間専用のtwitterと考えてフランクに使われることを想像しています。',
          '効果的な使い方としては主に授業中の意見交換や先生への質問、コワーキングスペースに関しては課題の相談などを想定しています。',
          '授業中の特殊機能として授業に関連するトークが白熱した場合先生が認識して授業のテーマに取り上げる機能を考えているので座学の授業でも今まで以上にfreeな授業が生まれると考えています。'],
        img: null,
        child: []
      }, {
        id: 10,
        name: 'デスクcloud 机プラグイン',
        place: ['app'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['大学の規定による審査を通ったプラグインがプラグインストアに並びます。',
          'プラグインには生徒の自主制作をメインに外部発注したものなどを想定しています。',
          'このプラグインを製作するハッカソンを開催したら面白いかもしれませんね。',
          'また別ソリューションのデスク編集考える事が面倒という方には大学からプリセットという形であらかじめカスタマイズしたものを用意しています。'],
        img: null,
        child: []
      }, {
        id: 11,
        name: 'デスクcloud プラグイン',
        place: ['app'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: ['デスククラウドでの拡張機能を追加することができます。',
          '大学の査定に通ったプラグインはプラグインストアに掲載されます。',
          'プラグインは自己制作することが可能で、機能面でのプラグインでも可能ですし、デザインのみのスキンという形でもストアに申請することは可能です。',
          'またストアに公開するのではなく個人的に使用するための制作も可能です。',
          '授業で習ったことを生かすための場と考えているので原則として大学内で習得可能なテクノロジーをベースに制作ができるモノを想定しています。'],
        img: null,
        child: []
      }, {
        id: 12,
        name: '名刺交換の感情記録',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 13,
        name: '疲れ度センサー',
        place: ['all place'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 14,
        name: '集中力',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 15,
        name: 'feedback',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 16,
        name: '授業中名刺交換 会話中の名刺表示',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 17,
        name: '授業中名刺交換 聞き手デスク',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 18,
        name: '授業中名刺交換 話し手デスク',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 19,
        name: '授業中名刺交換',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 20,
        name: '授業中名刺交換 ゲスト講師名刺',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 21,
        name: 'プライベート名刺交換',
        place: ['All place'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 22,
        name: '学生App 名刺管理',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 23,
        name: '学生App myColor時系列',
        place: ['APP'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 24,
        name: '学生App メンタルカラー投票',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 25,
        name: '学生App 友人ジャンル',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 26,
        name: '学生App 友人のmyColor傾向',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 27,
        name: '学生App 今必要な名刺',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 28,
        name: '学生証',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 29,
        name: "MyColor",
        place: [
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
        target: ["学生", "先生", "事務局"],
        targetStory: {
          student: [
            "グループワークや先生との距離が近い授業を受ける。",
            "相手の雰囲気からメンタル色を提示する。",
            "授業後周りからの印象を平均化した色を反映する。",
            "積み重なった色によって中間色が発生し自分だけの色が完成する。"
          ]
        },
        usetech: ["電子カード"],
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
          " ",
          "MyColorをきっかけに大学を「人生の夏休み」から「人生の分岐点へ」",
          "そんな思いが詰まったソリューションです。"
        ],
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
      }, {
        id: 30,
        name: 'myColor名刺',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 31,
        name: 'myColor 卒業証書',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 32,
        name: 'myColor メンタル色',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 33,
        name: 'myColor テクニック色',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 34,
        name: '学生App',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 35,
        name: '学生App 授業資料',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 36,
        name: '学生App デスクプラグイン申請',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 37,
        name: '学生App 飲み物購入',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 38,
        name: '学生App myColor査定申請',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 39,
        name: 'MR授業',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }
    ] as dataSet[],

    showData: [] as dataSet[],

    datalevelName: [] as string[],

  },
  getters: {
    getTopItemCount(state) {
      return state.topItemCount;
    },
    getPageId(state) {
      return state.pageId;
    },
    getMasterData(state) {
      return state.masterData;
    },
    getShowData(state) {
      return state.showData;
    },
    getDatalevelName(state) {
      return state.datalevelName;
    }
  },
  mutations: {
    setTopItemCount(state, newItemCount: number) {
      state.topItemCount = newItemCount;
    },
    setPageId(state, pageId: number) {
      state.pageId = pageId;
    },
    setShowData(state, dataSet: dataSet[]) {
      state.showData = dataSet
    }
  },
  actions: {
    changeTopItemCount({ commit }, newItemCount: number) {
      commit('setTopItemCount', newItemCount);
    },
    changePageId({ commit }, pageId: number) {
      commit('setPageId', pageId);
    },
    updateShowData({ commit }, dataSet: dataSet[]) {
      commit('setShowData', dataSet);
    }
  }
})
