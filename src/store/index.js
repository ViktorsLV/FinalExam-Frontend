import Vue from 'vue'
import Vuex from 'vuex'

import CurrentUser from './modules/CurrentUser.js'
import User from './modules/User.js'
import Posts from './modules/Posts.js'
import Review from './modules/Review.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {}
  },
  mutations: {
    setSnackbar: (state, snackbar) => (state.snackbar = snackbar)
  },
  actions: {
    setSnackbar({ commit }, snackbar) {
      snackbar.showing = true
      commit('setSnackbar', snackbar)
    }
  },
  modules: {
    CurrentUser,
    User,
    Posts,
    Review
  }
})