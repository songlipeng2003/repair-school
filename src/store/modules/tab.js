import { TAB_SELECT } from '../mutation-types'
import * as CONST from '../../const'

// 该模块的初始状态
const state = {
  tabSelected: CONST.TAB_HOME,
  tabContainerActive: CONST.TAB_CONTAINER_HOME
}

// 相关的 mutations
const mutations = {
  [TAB_SELECT] (state, tabSelected) {
    state.tabSelected = tabSelected

    if (tabSelected === CONST.TAB_HOME) {
      state.tabContainerActive = CONST.TAB_CONTAINER_HOME
    } else if (tabSelected === CONST.TAB_MEAL) {
      state.tabContainerActive = CONST.TAB_CONTAINER_MEAL
    } else if (tabSelected === CONST.TAB_MY) {
      state.tabContainerActive = CONST.TAB_CONTAINER_MY
    }
  }
}

export default {
  state,
  mutations
}
