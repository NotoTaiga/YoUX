import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface pageState {
  pageId:number;
  pageName:string;
}

export default new Vuex.Store({
  state: {
      pageId:0
    
  },
  getters:{
    getPageId(state){
      return state.pageId;
    }
  },
  mutations: {
    setPageName(state,pageId:number){
      state.pageId = pageId;
    }
  },
  actions: {
    changePageId({commit},pageId:number){
      commit('setPageName',pageId);
    }
  }
})
