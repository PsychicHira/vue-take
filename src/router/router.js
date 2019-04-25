import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/Msite'},
    {path: '/Msite', component: Msite},
    {path: '/Search', component: Search},
    {path: '/Order', component: Order},
    {path: '/Profile', component: Profile}
  ],
  linkActiveClass:'mui-active'
})

export default router
