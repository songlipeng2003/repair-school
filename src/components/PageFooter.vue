<template>
  <tabbar v-model="selected" :fixed="true">
    <tab-item id="tab-home">
      <i slot="icon" class="iconfont icon-zhufang"></i>
      首页
    </tab-item>
    <tab-item id="tab-repair">
      <i slot="icon" class="iconfont icon-wodefankui"></i>
      保修
    </tab-item>
    <tab-item id="tab-my">
      <i slot="icon" class="iconfont icon-wode"></i>
      我的
    </tab-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
import { mapGetters } from 'vuex'

export default {
  components: {
    Tabbar, TabItem
  },
  props: {
    active: ''
  },
  data () {
    return {
      selected: this.active
    }
  },
  watch: {
    selected: function () {
      if (this.selected === 'tab-home') {
        this.$router.push('/')
      } else if (this.selected === 'tab-repair') {
        this.$router.push('/announcement')
      } else if (this.selected === 'tab-my') {
        this.$router.push('/my')
      }
    }
  },
  beforeMount () {
    if (!this.logined) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(
      [
        'logined'
      ]
    )
  }
}
</script>

<style>
.mint-tabbar .iconfont {
  font-size: 24px;
}
</style>

