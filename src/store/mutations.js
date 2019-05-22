import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,SAVE_USERINFO} from './mutations-types'

export default {
  //存入地址
  [RECEIVE_ADDRESS](state,address){
    state.address = address
  },
  //存入分类
  [RECEIVE_CATEGORYS](state,categorys){
    state.categorys = categorys
  },
  //存入商家
  [RECEIVE_SHOPS](state,shops){
    state.shops = shops
  },
  //存入用户信息
  [SAVE_USERINFO](state,userInfo){
    state.userInfo = userInfo
  }
}
