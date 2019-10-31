import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface pageState {
  pageId: number;
  pageName: string;
}

export interface targetStory{
  student?:string[];
  teacher?:string[];
  admin?:string[];
  other?:string[];
  all?:string[];
}

export interface dataSet {
  id: number;
  name: string;
  place: string[];
  target: string[];
  targetStory:targetStory;
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
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['授業中名刺交換', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 1,
        name: 'aaa',
        place: ['All place'],
        target: ['aa'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['aa', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 2,
        name: 'bb',
        place: ['bb'],
        target: ['bb'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['bb', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 3,
        name: 'cc',
        place: ['All place'],
        target: ['学生'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['cc', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 4,
        name: 'dd',
        place: ['All place'],
        target: ['dd'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['dd', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 5,
        name: 'deed',
        place: ['ee'],
        target: ['学生'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['ee', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 6,
        name: 'ff',
        place: ['All place'],
        target: ['学生'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['授業中名刺交換', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }
    ] as dataSet[],

    showData: [
      {
        id: 0,
        name: 'デスクcloud',
        place: ['All place'],
        target: ['学生'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['授業中名刺交換', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 1,
        name: 'aaa',
        place: ['All place'],
        target: ['aa'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['aa', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 2,
        name: 'bb',
        place: ['bb'],
        target: ['bb'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['bb', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 3,
        name: 'cc',
        place: ['All place'],
        target: ['学生'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['cc', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 4,
        name: 'dd',
        place: ['All place'],
        target: ['dd'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['dd', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 5,
        name: 'deed',
        place: ['ee'],
        target: ['学生'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['ee', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      },{
        id: 6,
        name: 'ff',
        place: ['All place'],
        target: ['学生'],
        targetStory:{
          student:['aaa']
        },
        usetech: [],
        text: [],
        img: null,
        child: ['授業中名刺交換', 'グループトーク', 'プラグイン', 'ジェスチャー', '教科書表示', '感情サーモグラフィー', '出席管理', 'day todo', '場所チャット', '机模様替え'],
      }
    ] as dataSet[],    

    datalevelName:['aa','bb']as string[],

  },
  getters: {
    getPageId(state) {
      return state.pageId;
    },
    getMasterData(state){
      return state.masterData;
    },
    getShowData(state){
      return state.showData;
    },
    getDatalevelName(state){
      return state.datalevelName;
    }
  },
  mutations: {
    setPageId(state, pageId: number) {
      state.pageId = pageId;
    },
    setShowData(state, dataSet:dataSet[]){
      state.showData = dataSet
    }
  },
  actions: {
    changePageId({ commit }, pageId: number) {
      commit('setPageId', pageId);
    },
    updateShowData({commit},dataSet:dataSet[]){
      commit('setShowData', dataSet);
    }
  }
})
