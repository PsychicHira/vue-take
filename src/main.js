import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import '../node_modules/_mint-ui@2.2.13@mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App),
  router: router
})
