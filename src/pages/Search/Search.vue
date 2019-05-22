<template>
    <section class="search">
      <HeaderTop :title="title">
      </HeaderTop>
      <form class="search_form" action="#">
        <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
        <input type="submit" name="submit" class="search_submit">
      </form>
      <button @click="g()">1233333</button>
      <button @click="ad()">ad</button>
    </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import {mapState} from 'vuex'
  import {mapActions} from 'vuex'

  import axios from 'axios'
  export default {
    data(){
      return {
        title:'搜索',
        h:Number
      }
    },
    components:{
      HeaderTop
    },
    methods:{
      g:function(){
        console.log(this.$axios)
        this.$axios.get('/api/position/40.10038,116.36120')
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      ad:function(){
//        this.$store.state.age = 19
//        console.log(this.$store.state.age)
        console.log(this.$store.state.userInfo)

      }
    },
    mounted:function () {
        const {h} = this

      console.dir(this)
    },
    computed:{
      ...mapState(['address']),
      ...mapActions(['receive_address'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
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
    .icon-sousuo
      font-size 25px
      color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
    .header_login_text
      color #fff
  .search  //搜索
    width 100%
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
</style>
