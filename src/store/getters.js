
export default{
  receive_count(state){
    return state.cartFoods.reduce(function (accumulator,currentValue) {
      return accumulator + currentValue.count
    },0)
  },
  receive_price(state){
    return state.cartFoods.reduce(function (accumulator,currentValue) {
      return accumulator + currentValue.price*currentValue.count
    },0)
  }
}
