<template>
  <div>
    <div class="page-tab-container">
      <mt-tab-container style="page-tabbar-tab-container" v-model="active">
        <mt-tab-container-item id="tab-container-home">
          <home-page></home-page>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container-meal">
          <announcement-page></announcement-page>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container-my">
          <my-page></my-page>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <page-footer></page-footer>
  </div>
</template>

<script>
import HomePage from './HomePage'
import AnnouncementPage from './AnnouncementPage'
import MyPage from './MyPage'
import PageFooter from '../components/PageFooter'
import { mapGetters } from 'vuex'

export default {
  components: {
    HomePage, AnnouncementPage, MyPage, PageFooter
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(
      ['tabContainerActive']
    ),
    active: {
      get: function () {
        return this.tabContainerActive
      }
    }
  }
}
</script>
