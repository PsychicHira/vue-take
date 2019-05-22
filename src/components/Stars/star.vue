<template>
  <div :class="'star star-'+size">
    <span v-for="xx in starsArr" :class="'star-item '+xx" ></span>
  </div>
</template>
<script>
  export default {
    props: ['rating','size'],
    data(){
      return{
        score:0,
        starsArr:[]
      }
    },
    mounted:function () {
      let starsArr=[]
        this.score=this.rating
        let num= Math.floor(this.score)
        console.log(num)
        if(num>=1){
          for(let i=0;i<num;i++){
            this.starsArr.push('on')
          }
        }
        if(this.score*10-num*10>=5){
          this.starsArr.push('half')
        }
        if(5-this.starsArr.length>0){
          for(let i=0;i<=5-this.starsArr.length;i++){
            this.starsArr.push('off')
          }
        }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
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
          bg-image('./img/star48_on')
        &.half
          bg-image('./img/star48_half')
        &.off
          bg-image('./img/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./img/star36_on')
        &.half
          bg-image('./img/star36_half')
        &.off
          bg-image('./img/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./img/star24_on')
        &.half
          bg-image('./img/star24_half')
        &.off
          bg-image('./img/star24_off')
</style>
