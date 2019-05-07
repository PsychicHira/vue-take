<template>
  <div class="msite_shop_list">
    <div class="shop_header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="shop_container">
      <ul class="shop_list">
        <li class="shop_li border-1px" v-for="item in shops">
          <a>
            <div class="shop_left">
              <img class="shop_img" src="./img/shop/1.jpg">
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{item.name}}</h4>
                <ul class="shop_detail_ul">
                  <li class="supports" v-for="xx in item.supports">{{xx.icon_name}}</li>
                </ul>
              </section>
              <section class="shop_rating_order">
                <section class="shop_rating_order_left">
                  <div class="star star-24">
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item half"></span>
                    <span class="star-item off"></span>
                  </div>
                  <div class="rating_section">
                    {{item.rating}}
                  </div>
                  <div class="order_section">
                    月售{{item.recent_order_num}}单
                  </div>
                </section>
                <section class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">好吃专送</span>
                </section>
              </section>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥{{item.float_minimum_order_amount}}起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥{{item.float_delivery_fee}}</span>
                </p>
              </section>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
    export default {
    mounted:function () {
      this.$store.dispatch('receive_shops')
    },
    computed:{
      ...mapState(['shops']),
      ...mapActions(['receive_shops'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
@import "../../common/stylus/mixins.styl"
.msite_shop_list
  top-border-1px(#e4e4e4)
  margin-top 10px
  background #fff
  .shop_header
    padding 10px 10px 0 10px
    .shop_icon
      margin-left 5px
      color #999
    .shop_header_title
      color #999
      font-size 14px
      line-height 20px
  .shop_container
    margin-bottom 50px
    .shop_list
      .shop_li
        bottom-border-1px(#f1f1f1)
        width 100%
        >a
          clearFix()
          display block
          box-sizing border-box
          padding 15px 8px
          width 100%
          .shop_left
            float left
            box-sizing border-box
            width 23%
            height 75px
            padding-right 10px
            .shop_img
              display block
              width 100%
              height 100%
          .shop_right
            float right
            width 77%
            .shop_detail_header
              clearFix()
              width 100%
              .shop_title
                text_ellipsis()
                float left
                width 200px
                color #333
                font-size 16px
                line-height 16px
                font-weight 700
                &::before
                  content ' 品牌'
                  display inline-block
                  font-size 11px
                  line-height 11px
                  color #333
                  background-color #ffd930
                  padding 2px 2px
                  border-radius 2px
                  margin-right 5px
              .shop_detail_ul
                float right
                margin-top 3px
                .supports
                  float left
                  font-size 10px
                  color #999
                  border 1px solid #f1f1f1
                  padding 0 2px
                  border-radius 2px
            .shop_rating_order
              clearFix()
              width 100%
              margin-top 18px
              margin-bottom 8px
              .shop_rating_order_left
                float left
                color #ff9a0d
                .rating_section
                  float left
                  font-size 10px
                  color #ff6000
                  margin-left 4px
                .order_section
                  float left
                  font-size 10px
                  color #666
                  transform scale(.8)
              .shop_rating_order_right
                float right
                font-size 0
                .delivery_style
                  transform-origin 35px 0
                  transform scale(.7)
                  display inline-block
                  font-size 12px
                  padding 1px
                  border-radius 2px
                .delivery_left
                  color #fff
                  margin-right -10px
                  background-color #02a774
                  border 1px solid #02a774
                .delivery_right
                  color #02a774
                  border 1px solid #02a774
              .shop_distance
                clearFix()
                width 100%
                font-size 12px
                .shop_delivery_msg
                  float left
                  transform-origin 0
                  transform scale(.9)
                  width: 200px
                  color #666
                .segmentation
                  color #ccc
.star //2x 图 3x 图
  float left
  font-size 0
.star-item
  display inline-block
  background-repeat no-repeat
&.star-48
  .star-item
    width 20px
    height 20px
    margin-right 22px
    background-size 20px 20px
  &:last-child
    margin-right: 0
  &.on
    bg-image('./img/stars/star48_on')
  &.half
    bg-image('./img/stars/star48_half')
  &.off
    bg-image('./img/stars/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./img/stars/star36_on')
      &.half
        bg-image('./img/stars/star36_half')
      &.off
        bg-image('./img/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./img/stars/star24_on')
        &.half
          bg-image('./img/stars/star24_half')
        &.off
          bg-image('./img/stars/star24_off')
</style>
