import { LOGIN, LOGOUT } from '../mutation-types'

import Vue from 'vue'

const localStorage = window.localStorage
const prefix = 'school_'

// 该模块的初始状态
const state = {
  logined: localStorage.getItem(prefix + 'logined'),
  token: localStorage.getItem(prefix + 'token'),
  userId: localStorage.getItem(prefix + 'userId')
}

Vue.http.headers.common['X-Access-Token'] = state.token

// 相关的 mutations
const mutations = {
  [LOGIN] (state, user) {
    state.logined = true
    state.token = user.token
    state.userId = user.id

    localStorage.setItem(prefix + 'logined', true)
    localStorage.setItem(prefix + 'token', user.token)
    localStorage.setItem(prefix + 'userId', user.id)

    Vue.http.headers.common['X-Access-Token'] = state.token
  },
  [LOGOUT] (state) {
    state.logined = false
    state.token = null
    state.userId = null

    localStorage.setItem(prefix + 'logined', false)
    localStorage.setItem(prefix + 'token', null)
    localStorage.setItem(prefix + 'userId', null)
  }
}

export default {
  state,
  mutations
}
