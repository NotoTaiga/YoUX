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

    masterData: [
      {
        id: 0,
        name: 'デスクcloud',
        place: ['All place'],
        target: ['学生'],
        targetStory: {
          student: ['大学に登校する', '好きな教室、場所に移動する', '自動的な認証で出席登録', '自分の鞄やpcなどをデスクに置く', '2次元上のコンテンツと3次元上のコンテンツが混在した自分だけの空間で作業できる']
        },
        usetech: ['電子掲示板'],
        text: ['aaaaaaaaaaaaaaa', '改行したい場合はこれで'],
        img: require('./assets/img/neko.jpg'),
        child: ['授業中名刺交換', 'グループトーク', 'デスクcloud プラグイン', 'デスクcloud ジェスチャー', 'デスクcloud 資料表示', '感情サーモグラフィー', 'デスクcloud 出席管理', 'day ToDo', '場所チャット', '机模様替え'],
      }, {
        id: 1,
        name: '授業中名刺交換',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 2,
        name: 'グループトーク',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 3,
        name: 'デスクcloud プラグイン',
        place: ['no'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 4,
        name: 'デスクcloud ジェスチャー',
        place: ['no'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 5,
        name: 'デスクcloud 資料表示',
        place: ['All Space'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 6,
        name: '感情サーモグラフィー',
        place: ['All space'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['名刺交換の感情記録', '疲れ度センサー', '捗り度']
      }, {
        id: 7,
        name: 'デスクcloud 出席管理',
        place: ['教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 8,
        name: 'day ToDo',
        place: ['All place'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 9,
        name: '場所チャット',
        place: ['All place'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 10,
        name: '学生APP 机模様替え',
        place: ['app'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 11,
        name: '捗り度',
        place: ['app'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: [],
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
        name: 'myColor',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
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

    showData: [
      {
        id: 0,
        name: 'デスクcloud',
        place: ['All place'],
        target: ['学生'],
        targetStory: {
          student: ['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['授業中名刺交換', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }, {
        id: 1,
        name: 'aaa',
        place: ['All place'],
        target: ['aa'],
        targetStory: {
          student: ['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['aa', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }, {
        id: 2,
        name: 'bb',
        place: ['bb'],
        target: ['bb'],
        targetStory: {
          student: ['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['bb', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }, {
        id: 3,
        name: 'cc',
        place: ['All place'],
        target: ['学生'],
        targetStory: {
          student: ['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['cc', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }, {
        id: 4,
        name: 'dd',
        place: ['All place'],
        target: ['dd'],
        targetStory: {
          student: ['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['dd', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }, {
        id: 5,
        name: 'deed',
        place: ['ee'],
        target: ['学生'],
        targetStory: {
          student: ['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['ee', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }, {
        id: 6,
        name: 'ff',
        place: ['All place'],
        target: ['学生'],
        targetStory: {
          student: ['aaa', 'bbb', 'ccc']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['授業中名刺交換', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }
    ] as dataSet[],

    datalevelName: ['aa', 'bb'] as string[],

  },
  getters: {
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
    setPageId(state, pageId: number) {
      state.pageId = pageId;
    },
    setShowData(state, dataSet: dataSet[]) {
      state.showData = dataSet
    }
  },
  actions: {
    changePageId({ commit }, pageId: number) {
      commit('setPageId', pageId);
    },
    updateShowData({ commit }, dataSet: dataSet[]) {
      commit('setShowData', dataSet);
    }
  }
})
