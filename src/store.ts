import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageName:'TOP',
  },
  getters:{
    getPageName(state){
      return state.pageName;
    }
  },
  mutations: {
    setPageName(state,name){
      state.pageName = name;
    }
  },
  actions: {
    changePageName({commit},name){
      commit('setPageName',name);
    }
  }
})
