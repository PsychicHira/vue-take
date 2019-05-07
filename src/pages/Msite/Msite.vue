<template>
    <section class="msite">
      <HeaderTop :title="title">
        <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
        </span>

        <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
        </span>

      </HeaderTop>

      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>111</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/2.jpg">
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/3.jpg">
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/4.jpg">
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/5.jpg">
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/6.jpg">
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/7.jpg">
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/8.jpg">
                </div>
                <span>土豪推荐</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/9.jpg">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/10.jpg">
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/11.jpg">
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/12.jpg">
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/13.jpg">
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/14.jpg">
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./img/nav/2.jpg">
                </div>
                <span>土豪推荐</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>

      <ShopList></ShopList>

    </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    data(){
      return {
        title:'好吃外卖',
        categorysArr:[]
      }
    },
    components:{
      HeaderTop,
      ShopList
    },
    computed:{
      ...mapActions(['receive_categorys']),
      ...mapState(['categorys','name']),

    },
    mounted:function () {
      this.$store.dispatch('receive_categorys'),
        this.categorysArr= categorys
    },
    mounted:function () {

    },
    watch:{
      categorys(){
        console.log(this.categorys)
        this.$nextTick(()=>{
//          new Swiper ('.swiper-container', {
//            loop: true,
//            // 如果需要分页器
//            pagination: {
//              el: '.swiper-pagination',
//            }
//          })
//          console.log(this.$store.state.categorys)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
@import "../../common/stylus/mixins.styl"
.msite
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
      .swiper-pagination
      >span.swiper-pagination-bullet-active
        /*background #02a774*/

</style>
