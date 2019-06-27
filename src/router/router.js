import VueRouter from 'vue-router'

const Msite = ()=> import('../pages/Msite/Msite.vue')
const Order = ()=> import('../pages/Order/Order.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')
const Login = ()=> import('../pages/Login/Login.vue')
const Search = ()=> import('../pages/Search/Search.vue')

import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../components/ShopGoods/ShopGoods.vue'
import ShopInfo from '../components/ShopInfo/ShopInfo.vue'
import ShopRating from '../components/ShopRating/ShopRating.vue'

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/Msite', meta: {show: true}},
    {path: '/Msite', component: Msite, meta: {show: true}},
    {path: '/Search', component: Search, meta: {show: true}},
    {path: '/Order', component: Order, meta: {show: true}},
    {path: '/Profile', component: Profile, meta: {show: true}},
    {path: '/Login', component: Login, meta: {show: false}},
    {path: '/Shop', component: Shop,meta: {show: true},children:[
      {path:'/Shop/Goods',component:ShopGoods},
      {path:'/Shop/Info',component:ShopInfo},
      {path:'/Shop/Rating',component:ShopRating},
      {path:'',redirect:'/Shop/Goods'}
    ]}
  ],
  linkActiveClass: 'mui-active'
})

export default router
