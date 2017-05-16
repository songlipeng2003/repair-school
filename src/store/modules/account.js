import { LOGIN, LOGOUT } from '../mutation-types'

const localStorage = window.localStorage

// 该模块的初始状态
const state = {
  logined: localStorage.logined,
  token: localStorage.token,
  userId: localStorage.userId
}

// 相关的 mutations
const mutations = {
  [LOGIN] (state, user) {
    localStorage.logined = state.logined = true
    localStorage.token = state.token = user.token
    localStorage.userId = state.userId = user.id
  },
  [LOGOUT] (state) {
    localStorage.logined = state.logined = false
    localStorage.token = state.token = null
    localStorage.userId = state.userId = null
  }
}

export default {
  state,
  mutations
}
