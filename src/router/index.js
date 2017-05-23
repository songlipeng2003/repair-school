import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage'
import AnnouncementPage from '../pages/AnnouncementPage'
import AnnouncementViewPage from '../pages/AnnouncementViewPage'
import RepairPage from '../pages/RepairPage'
import RepairViewPage from '../pages/RepairViewPage'
import DevicePage from '../pages/DevicePage'
import DeviceRepairPage from '../pages/DeviceRepairPage'
import OpenDeviceRepairPage from '../pages/OpenDeviceRepairPage'
import OpenRepairSuccessPage from '../pages/OpenRepairSuccessPage'
import DeviceViewPage from '../pages/DeviceViewPage'
import MyPage from '../pages/MyPage'
import LoginPage from '../pages/LoginPage'
import ChangePasswordPage from '../pages/ChangePasswordPage'
import DeviceFormPage from '../pages/DeviceFormPage'

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
      path: '/device',
      component: DevicePage
    },
    {
      path: '/device/create',
      component: DeviceFormPage
    },
    {
      path: '/device/:id',
      component: DeviceViewPage
    },
    {
      path: '/device/:id/update',
      component: DeviceFormPage
    },
    {
      path: '/device/:id/repair',
      component: DeviceRepairPage
    },
    {
      path: '/open/device/:id/repair',
      component: OpenDeviceRepairPage
    },
    {
      path: '/open/repair/success',
      component: OpenRepairSuccessPage
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
