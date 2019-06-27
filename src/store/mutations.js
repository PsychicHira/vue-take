import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  SAVE_USERINFO,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_FOOD_COUNT,
  FILTER_SHOP_RATINGS,
  RECEIVE_SEARCHSHOPS
} from './mutations-types'
import Vue from 'vue'

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
  [RECEIVE_SHOP_RATINGS](state,shopRatings){
    state.shopRatings = shopRatings
  },
  //给食物增加count
  [INCREMENT_FOOD_COUNT](state,{food}){
    // console.log(food)
    if(!food.count){
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else{
      food.count++
    }
},
  //给食物减少count
  [DECREMENT_FOOD_COUNT](state,{food}){
    food.count--
    if(food.count===0){
      state.cartFoods.splice(state.cartFoods.indexOf(food),1)
    }
  },
  //food的count清零
  [CLEAR_FOOD_COUNT](state){
    state.shopGoods.forEach(function (item) {
      item.foods.forEach(function (item) {
        item.count=0
      })
    })
    state.cartFoods=[]
  },
  //过滤用户评价
  [FILTER_SHOP_RATINGS](state,shopRatings){
    state.shopRatings = shopRatings
  },
  //获取搜索商家结果
  [RECEIVE_SEARCHSHOPS](state,searchShops){
    state.searchShops = searchShops
  }
}
