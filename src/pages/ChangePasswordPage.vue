<template>
  <div>
    <mt-header :title="$t('change_password')">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div >
        <mt-field :label="$t('old_password')" :placeholder="$t('old_password_placeholder')" type="password" v-model="oldPassword"></mt-field>
        <mt-field :label="$t('new_password')" :placeholder="$t('new_password_placeholder')" type="password" v-model="newPassword"></mt-field>
        <mt-field :label="$t('confirm_password')" :placeholder="$t('confirm_password_placeholder')" type="password" v-model="confirmPassword"></mt-field>
        <mt-button type="primary" size="large" @click.native="changePassword">{{$t('change_password')}}</mt-button>
    </div>
  </div>
</template>

<script>
import { Header, Field, Button, MessageBox, Toast } from 'mint-ui'

import { User } from '../resources'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'mt-header': Header,
    'mt-field': Field,
    'mt-button': Button
  },
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  computed: {
    ...mapGetters(
      [
        'loginedUserId'
      ]
    )
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    changePassword: function (event) {
      let self = this

      User.changePassword({id: this.loginedUserId}, {
        old_password: this.oldPassword,
        new_password: this.newPassword,
        confirm_password: this.confirmPassword
      }).then(function (response) {
        Toast(self.$t('update_success'))
        self.logout()
        self.$router.push('/login')
      }, (response) => {
        MessageBox.alert(response.body.message)
      })
    }
  }
}
</script>
