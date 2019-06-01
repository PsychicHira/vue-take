import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

import store from './store/index.js'

import axios from 'axios'
Vue.prototype.$axios = axios

import './mock/mockServer'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: c => c(App),
  router: router,
  store
})
