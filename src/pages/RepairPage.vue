<template>
  <div>
    <mt-header title="保修"></mt-header>

    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="disableLoadMore" infinite-scroll-distance="10" infinite-scroll-listen-for-event="refreshData">
      <mt-loadmore :top-method="refresh" ref="loadmore">
        <mt-cell :title="repair.code" :label="'发布时间：' + filterDate(repair.created_at)" v-for="repair in repairs" :to="'repair/' + repair.id" is-link>
        </mt-cell>
      </mt-loadmore>
    </div>

    <page-footer active="tab-repair"></page-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Cell, Button, Loadmore, InfiniteScroll, Indicator } from 'mint-ui'
import PageFooter from '../components/PageFooter'

import { Repair } from '../resources'

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
      repairs: [],
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
      Repair.query({page: this.page}).then((response) => {
        if (clear) {
          this.repairs = response.body
        } else {
          if (response.body.length === 0) {
            this.allLoaded = true
          } else {
            this.repairs = this.repairs.concat(response.body)
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
