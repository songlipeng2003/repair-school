<template>
  <div>
    <mt-header :title="repair.code">
      <router-link to="/repair" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="名称" :value="repair.name"></mt-cell>
    <mt-cell title="密码" :value="repair.code"></mt-cell>
    <mt-cell title="品牌" :value="repair.brand"></mt-cell>
    <mt-cell title="型号" :value="repair.model"></mt-cell>
    <mt-cell title="位置" :value="repair.position"></mt-cell>
    <mt-cell title="数量" :value="repair.quantity"></mt-cell>
    <mt-cell title="单位" :value="repair.union"></mt-cell>
    <mt-cell title="创建时间" :value="repair.created_at"></mt-cell>
    <mt-cell title="备注" :value="repair.remark"></mt-cell>
  </div>
</template>

<script>
import { Header, Cell, Button } from 'mint-ui'

import { Repair } from '../resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button
  },
  data () {
    return {
      id: this.$route.params.id,
      repair: {}
    }
  },
  beforeMount () {
    Repair.get({id: this.id}).then((response) => {
      this.repair = response.body
    })
  }
}
</script>
