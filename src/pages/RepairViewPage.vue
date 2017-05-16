<template>
  <div>
    <mt-header :title="repair.title">
      <router-link to="/repair" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <p>{{ repair.content }}</p>
  </div>
</template>

<script>
import { Header, Cell, Button } from 'mint-ui'

import { Announcement } from '../resources'

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
    Announcement.get({id: this.id}).then((response) => {
      this.repair = response.body
    })
  }
}
</script>
