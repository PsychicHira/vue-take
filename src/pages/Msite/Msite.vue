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
            <div class="swiper-slide" v-for="categorys in categorysOut">
              <a href="javascript:" class="link_to_food" v-for="category in categorys">
                <div class="food_container">
                  <!--<img src="./img/nav/1.jpg">-->
                  <!--//这里是个坑，img的src前面要加bind，里面才能写表达式，而且，v-for遍历的属性不能加 {{}} 这个大括号-->
                  <img :src="baseImg+category.image_url">
                </div>
                <span>{{category.title}}</span>
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
  import {mapState} from 'vuex'

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data(){
      return {
        title:'好吃外卖',
        categorysArr:[],
        categorysOut:[],
        categorysIn:[],
        baseImg:'http://localhost:4000'
      }
    },
    components:{
      HeaderTop,
      ShopList
    },
    mounted:function () {
      this.$store.dispatch('receive_categorys')
    },
    computed:{
//      ...mapActions(['receive_categorys']),      //这里应该是多余的，不注释掉，receive_categorys会触发2次
      ...mapState(['categorys'])
    },
    methods:{
      changeArr:function () {
        this.categorysArr.forEach((item)=> {
          if(this.categorysIn.length<8){
            this.categorysIn.push(item)
          }else{
            this.categorysOut.push(this.categorysIn)
            this.categorysIn=[]
            this.categorysIn.push(item)
          }
        })
        this.categorysOut.push(this.categorysIn)
      }
    },
    watch:{
      categorys(){
        this.categorysArr = this.categorys
        this.changeArr()
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
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
