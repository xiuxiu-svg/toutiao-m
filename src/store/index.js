import Vue from 'vue'
import Vuex from 'vuex'

import { setItem, getItem } from '@/utils/storage'
Vue.use(Vuex)
const userKey = 'toutiao'
export default new Vuex.Store({
  state: {
    user: getItem(userKey)
  },
  mutations: {
    userToken (state, data) {
      state.user = data
      setItem(userKey, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
