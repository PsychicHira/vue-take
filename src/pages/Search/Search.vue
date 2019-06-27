<template>
  <section class="search">
    <header class="header">
      <a class="header_title">
        <span class="header_title_text ellipsis">搜索</span>
      </a>
    </header>
    <form class="search_form" @submit.prarent="search">
      <input type="search" placeholder=" 请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <section class="list" v-if="flag">
      <ul class="list_container" v-if="!this.searchShops">
        <!--<li class="list_li">-->
          <!--<section class="item_left">-->
            <!--<img src="http://cangdu.org:8001/img/16265a70fe27854.jpg"-->
                 <!--class="restaurant_img">-->
          <!--</section>-->
          <!--<section class="item_right">-->
            <!--<div class="item_right_text">-->
              <!--<p>-->
                <!--<span>aaa</span>-->
              <!--</p>-->
              <!--<p>月售 671 单</p>-->
              <!--<p>20 元起送 / 距离 1058.2 公里</p>-->
            <!--</div>-->
          <!--</section>-->
        </li>
      </ul>
      <div v-else>{{this.searchShops.message}}</div>
    </section>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import {mapState} from 'vuex'

  import axios from 'axios'
  export default {
    data(){
      return {
        title:'搜索',
        h:Number,
        keyword:'',
        space:false,
        flag:false
      }
    },
    components:{
      HeaderTop
    },
    methods:{
      search(){
        this.$axios.get('/api/search_shops?keyword='+this.keyword+'&geohash=40.10038,116.36867').then((res)=>{
          this.$store.dispatch('receive_searchshops',res.data.data)
          console.log(res.data.data)
        }).catch(function (error) {
          console.log(error);
        })
        this.flag = true
      }
    },
    computed:{
      ...mapState(['searchShops'])
    },
    mounted:function () {
      this.flag=false
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .header // 头部公共 css
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
          .iconfont
            font-size 22px
            color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 30%
        color #fff
        font-size 22px
        text-align center
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774
    .list
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>
