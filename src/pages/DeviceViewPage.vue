<template>
  <div>
    <mt-header :title="device.name">
      <router-link to="/device" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <p>{{ device.remark }}</p>
  </div>
</template>

<script>
import { Header, Cell, Button } from 'mint-ui'

import { Device } from '../resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button
  },
  data () {
    return {
      id: this.$route.params.id,
      device: {}
    }
  },
  beforeMount () {
    Device.get({id: this.id}).then((response) => {
      this.device = response.body
    })
  }
}
</script>
