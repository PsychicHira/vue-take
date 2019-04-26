import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/Msite', meta: {show: true}},
    {path: '/Msite', component: Msite, meta: {show: true}},
    {path: '/Search', component: Search, meta: {show: true}},
    {path: '/Order', component: Order, meta: {show: true}},
    {path: '/Profile', component: Profile, meta: {show: true}},
    {path: '/Login', component: Login, meta: {show: false}}
  ],
  linkActiveClass: 'mui-active'
})

export default router
