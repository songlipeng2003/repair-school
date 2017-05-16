import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage'
import AnnouncementPage from '../pages/AnnouncementPage'
import AnnouncementViewPage from '../pages/AnnouncementViewPage'
import RepairPage from '../pages/RepairPage'
import RepairViewPage from '../pages/RepairViewPage'
import MyPage from '../pages/MyPage'
import LoginPage from '../pages/LoginPage'
import ChangePasswordPage from '../pages/ChangePasswordPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/announcement',
      component: AnnouncementPage
    },
    {
      path: '/announcement/:id',
      component: AnnouncementViewPage
    },
    {
      path: '/repair',
      component: RepairPage
    },
    {
      path: '/repair/:id',
      component: RepairViewPage
    },
    {
      path: '/my',
      component: MyPage
    },
    {
      path: '/my/change-password',
      component: ChangePasswordPage
    },
    {
      path: '/',
      component: HomePage
    }
  ]
})
