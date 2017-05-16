<template>
  <div>
    <mt-header title="首页"></mt-header>

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
