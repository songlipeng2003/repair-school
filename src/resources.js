import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ENDPOINT } from './configs/config'

Vue.use(VueResource)

Vue.http.options.root = API_ENDPOINT
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['X-Access-Token'] = '1'

export const Account = Vue.resource(
  'accounts', {}, {
    register: {
      method: 'POST',
      url: 'accounts/register'
    },
    login: {
      method: 'POST',
      url: 'accounts/login'
    }
  }
)

export const User = Vue.resource(
  'users{/id}', {}, {
    names: {method: 'GET', url: 'users/names'},
    changePassword: {method: 'Put', url: 'users{/id}/change-password'}
  }
)

export const Announcement = Vue.resource(
  'announcements{/id}'
)

export const Repair = Vue.resource(
  'repairs{/id}'
)
