import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,SAVE_USERINFO,RECEIVE_SHOP_INFO,RECEIVE_SHOP_GOODS,RECEIVE_SHOP_RATING} from './mutations-types'

import axios from 'axios'
export default {
  //获取地址
  receive_address({commit}){
    // commit('change')
    //发送异步请求
      axios.get('/api/position/40.10038,116.36120')
        .then(function (response) {
          // commit(RECEIVE_ADDRESS,{})     // 狗比官网， RECEIVE_ADDRESS 这样是不要加单引号的
          commit(RECEIVE_ADDRESS,response.data)
        })
      .catch(function (error) {
        console.log(error)
      })
  },
  //获取分类（导航分类）
  receive_categorys({commit}){
    axios.get('/api/index_category')
      .then(function (response) {
        commit(RECEIVE_CATEGORYS,response.data.data)
      })
      .catch(function (error) {
      console.log(error)
    })
  },
  //获取商家
  receive_shops({commit,state}){
    axios.get('/api/shops?'+state.latitude+'&'+state.longitude)
      .then(function (response) {
        commit(RECEIVE_SHOPS,response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  //存入用户信息(短信登陆）
  save_userInfo({commit},userInfo){
    commit(SAVE_USERINFO,userInfo)
  },
  //接收商家信息
  receive_shop_info({commit}){
    axios.get('/info').then((res)=>{
      commit(RECEIVE_SHOP_INFO,res.data.data)
    })
  },
  //接收商家产品
  receive_shop_goods({commit}){
    axios.get('/goods').then((res)=>{
      commit(RECEIVE_SHOP_GOODS,res.data.data)
    })
  },
  //接收商家评价
  receive_shop_rating({commit}){
    axios.get('/rating').then((res)=>{
      commit(RECEIVE_SHOP_RATING,res.data.data)
    })
  }
}

