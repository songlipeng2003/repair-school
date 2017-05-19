<template>
  <div>
    <mt-header title="首页">
      <router-link to="/announcement" slot="right">
        <mt-button ><i slot="icon" class="iconfont icon-message"></i></mt-button>
      </router-link>
    </mt-header>

    <page-footer active="tab-home"></page-footer>
  </div>
</template>

<script>
import { Header, Cell } from 'mint-ui'
import PageFooter from '../components/PageFooter'

// import { Activity } from '../resources'
import { mapActions } from 'vuex'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    PageFooter
  },
  data () {
    return {
    }
  },
  beforeCreate () {
  },
  methods: {
    ...mapActions([
    ])
  }
}
</script>
