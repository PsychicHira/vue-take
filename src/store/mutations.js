import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,SAVE_USERINFO,RECEIVE_SHOP_INFO,RECEIVE_SHOP_GOODS,RECEIVE_SHOP_RATING} from './mutations-types'

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
  },
  //获取商家信息
  [RECEIVE_SHOP_INFO](state,shopInfo){
    state.shopInfo = shopInfo
  },
  //获取商家产品
  [RECEIVE_SHOP_GOODS](state,shopGoods){
    state.shopGoods = shopGoods
  },
  //获取商家评价
  [RECEIVE_SHOP_RATING](state,shopRating){
    state.shopRating = shopRating
  }
}
