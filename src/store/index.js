import Vue from 'vue'
import Vuex from 'vuex'

import CurrentUser from './modules/CurrentUser.js'
import User from './modules/User.js'
import Posts from './modules/Posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CurrentUser,
    User,
    Posts,
  }
})