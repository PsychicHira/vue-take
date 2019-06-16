<template>
  <div class="cartcontrol">
    <transition name="remove">
      <div class="iconfont icon-remove_circle_outline" v-if="this.food.count>0?true:false" @click.stop="count(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count<=0?false:true">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="count(true)"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        flag:false
      }
    },
    props:[
      'food'
    ],
    methods:{
      count(isAdd){
        this.$store.dispatch('food_count',{food:this.food,isAdd})
        if(this.food.count>0){
          this.flag=true
        }else{
          this.flag=false
          this.food.count=''
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
    .remove-enter,.remove-leave-to
        opacity 0
        transform translateX(50px)
    .remove-enter-active,.remove-leave-active
        transition: all 0.2s linear;

    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
