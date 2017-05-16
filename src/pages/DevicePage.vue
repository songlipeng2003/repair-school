<template>
  <div>
    <mt-header title="设备"></mt-header>

    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="disableLoadMore" infinite-scroll-distance="10" infinite-scroll-listen-for-event="refreshData">
      <mt-loadmore :top-method="refresh" ref="loadmore">
        <mt-cell :title="device.name" :label="device.brand + device.model" v-for="device in devices" :to="'device/' + device.id" is-link>
        </mt-cell>
      </mt-loadmore>
    </div>

    <page-footer active="tab-device"></page-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Cell, Button, Loadmore, InfiniteScroll, Indicator } from 'mint-ui'
import PageFooter from '../components/PageFooter'

import { Device } from '../resources'

Vue.use(InfiniteScroll)

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button,
    'mi-loadmore': Loadmore,
    PageFooter
  },
  data () {
    return {
      page: 1,
      allLoaded: false,
      devices: [],
      loading: false
    }
  },
  computed: {
    disableLoadMore: function () {
      return this.loading || this.allLoaded
    }
  },
  methods: {
    refresh (id) {
      this.page = 1

      this.loadData(true)

      this.$refs.loadmore.onTopLoaded(id)
    },
    loadMore (id) {
      this.loading = true

      this.loadData()
    },
    loadData (clear = false) {
      Indicator.open()
      Device.query({page: this.page}).then((response) => {
        if (clear) {
          this.devices = response.body
        } else {
          if (response.body.length === 0) {
            this.allLoaded = true
          } else {
            this.devices = this.devices.concat(response.body)
          }
        }

        this.loading = false

        this.page ++

        if (clear) {
          this.$emit('refreshData')
        }

        Indicator.close()
      })
    },
    filterDate: (date) => {
      return date.substring(0, 16)
    }
  },
  beforeMount () {
  }
}
</script>
