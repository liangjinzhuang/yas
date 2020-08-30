import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建Vuex对象
const store = new Vuex.Store({
  state: {
    // 存放的键值对就是所要管理的状态
    token: '111',
    username: '',
    pageTitle: 'YAS'
  },
  mutations: {
    editUserName (state, username) {
      state.username = username
    },
    getUserName (state) {
      return state.username
    },
    setPageTitle (state, name) {
      state.pageTitle = name
    }
  },
  getters: {
    getPageTitle (state) {
      return state.pageTitle
    }
  }
})
export default store
