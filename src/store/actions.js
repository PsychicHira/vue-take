import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations-types'

import axios from 'axios'
export default {
  receive_address({commit}){
    // commit('change')
    //发送异步请求
      axios.get('/api/position/40.10038,116.36120')
        .then(function (response) {
          commit(RECEIVE_ADDRESS,response.data)
        })
      .catch(function (error) {
        console.log(error)
      })
  // commit(RECEIVE_ADDRESS,{})     // 狗比官网， RECEIVE_ADDRESS 这样是不要加单引号的
    //把结果给name试一下
  },
  receive_categorys({commit}){
    axios.get('/api/index_category')
      .then(function (response) {
        commit(RECEIVE_CATEGORYS,response.data.data)
      })
      .catch(function (error) {
      console.log(error)
    })
  },
  receive_shops({commit,state}){
    axios.get('/api/shops?'+state.latitude+'&'+state.longitude)
      .then(function (response) {
        commit(RECEIVE_SHOPS,response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
