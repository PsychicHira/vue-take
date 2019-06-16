<template>
    <div>
      <div>
        <div class="goods">
          <div class="menu-wrapper">
            <div class="content">
            <ul v-for="(item,index) in shopGoods" :key="index">
              <li class="menu-item" :class="{current:index===indexCurrent}" @click="moveFood(index)">
              <!--<li class="menu-item current">-->
                <span class="text bottom-border-1px">
                <img class="icon" :src="item.icon?item.icon:false" :style="item.icon?'block':'display:none'">
                {{item.name}}
                </span>
              </li>
            </ul>
            </div>
          </div>
          <div class="foods-wrapper">
            <div class="content" ref="foodTop">
            <ul v-for="(item,index) in shopGoods" :key="index">
              <li class="food-list-hook">
                <h1 class="title">{{item.name}}</h1>
                  <ul v-for="(food,index) in item.foods" :key="index" @click="toggleFood(food)">
                    <li class="food-item bottom-border-1px">
                      <div class="icon">
                        <img width="57" height="57" :src="food.icon">
                      </div>
                      <div class="content">
                        <h2 class="name">{{food.name}}</h2>
                        <p class="desc">{{food.description}}</p>
                        <div class="extra">
                          <span class="count">月售 {{food.sellCount}} 份</span>
                          <span>好评率 {{food.rating}}%</span>
                        </div>
                        <div class="price">
                          <span class="now">￥{{food.price}}</span>
                        </div>
                        <div class="cartcontrol-wrapper">
                          <CartControl :food="food"></CartControl>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <food ref="food"></food>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import CartControl from '../CartControl/CartControl.vue'
  import Food from '../Food/Food.vue'
  export default {
    data () {
      return {
        scrollY:0,
        foodTops:[],
        current:0,
        foodScroll:''
      }
    },
    mounted:function () {
      this.$store.dispatch('receive_shop_goods',()=>{
        this.$nextTick(()=>{
          //声明需要的变量
          let scrollY = Number
          let foodTops = []
          let top = 0
          foodTops.push(0)

          //初始化滑动组件
          new BScroll('.menu-wrapper')
            //配置右侧滑动配置
          this.foodScroll = new BScroll('.foods-wrapper',{
            probeType:2
          })
            //配置右侧滑动轴数值事件
          this.foodScroll.on('scroll',({x,y})=>{
            let scrollY = Math.abs(y)
            //把scrollY存进组件的data中
            this.scrollY = scrollY
          })

          //获取右侧列表渲染完毕后，分类标题的top
            //获取到li标签
          let arrLi = this.$refs.foodTop.getElementsByClassName('food-list-hook')
          Array.prototype.slice.call(arrLi).forEach((item)=>{
            top += item.clientHeight
            foodTops.push(top)
          })
            //把foodTops存进组件的data中
          this.foodTops = foodTops
        })
      })
    },
    watch:{
      scrollY:function(){
        this.current = this.foodTops.find((top)=>{
          console.log(this.current)
          return top >= this.scrollY
        })
      }
    },
    computed:{
      ...mapState(['shopGoods']),
      indexCurrent:function () {
        let a = this.current
        let currentIndex = this.foodTops.indexOf(a)
        return currentIndex
      }
    },
    methods:{
      moveFood(index){
        let y = this.foodTops[index]
        this.scrollY = y
        this.foodScroll.scrollTo(0,-y,500)
      },
      toggleFood(food){
        console.log(food)
        this.$refs.food.toggleFood(food)
      }
    },
    components:{
      CartControl,
      Food
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
