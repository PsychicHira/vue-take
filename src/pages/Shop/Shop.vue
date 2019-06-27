<template>
    <div>
      <ShopHead></ShopHead>
      <div class="tab">
        <div class="tab-item ">
          <router-link to="/shop/Goods"class="router-link-active" replace>点餐</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/Rating" replace>评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/Info" replace >商家</router-link>
        </div>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <ShopCart></ShopCart>
    </div>
</template>

<script>
  import ShopHead from '../../components/ShopHead/ShopHead.vue'
  import ShopInfo from '../../components/ShopInfo/ShopInfo.vue'
  import ShopGoods from '../../components/ShopGoods/ShopGoods.vue'
  import ShopRating from '../../components/ShopRating/ShopRating.vue'
  import ShopCart from '../../components/ShopCart/ShopCart.vue'
  export default {
    data () {
      return {
        msg: "Hello Vue.js"
      }
    },
    components: {
      ShopHead,
      ShopInfo,
      ShopGoods,
      ShopRating,
      ShopCart
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    z-index: 39
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>

