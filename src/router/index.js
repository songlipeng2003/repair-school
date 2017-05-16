import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage'
import AnnouncementPage from '../pages/AnnouncementPage'
import MyPage from '../pages/MyPage'
import LoginPage from '../pages/LoginPage'
import AnnouncementViewPage from '../pages/AnnouncementViewPage'
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
      path: '/my',
      component: MyPage
    },
    {
      path: '/my/change-password',
      component: ChangePasswordPage
    },
    {
      path: '/announcement/:id',
      component: AnnouncementViewPage
    },
    {
      path: '/',
      component: HomePage
    }
  ]
})
