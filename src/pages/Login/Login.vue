<template>
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">好吃外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on:msg}" @click="msg=!msg">短信登录</a>
            <a href="javascript:;" :class="{on:!msg}" @click="msg=!msg">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <div :class="{on:msg}">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button :disabled="phoneNum?null:'disabled'" class="get_verification" :class="{color:phoneNum}" @click.prevent="time">获取验证码{{timeNum}}</button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册好吃外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on:!msg}">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                </section>
                <section class="login_verification">
                  <input :type="circleFlag?'tel':'password'" maxlength="8" placeholder="密码" v-model="pwd">
                  <div class="switch_button " :class="circleFlag?'off':'on'" @click="moveCircle()">
                    <div class="switch_circle" :class="{move:circleFlag}"></div>
                    <span class="switch_text">...</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img class="get_verification" :src="imgUrl" alt="captcha" @click="refreshImg">
                </section>
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"><</i>
        </a>
      </div>
      <AlertTip :alertText="tipText" v-show="showTip" @closeTip="closeTip"></AlertTip>
    </section>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip'
  import axios from 'axios'
  export default {
      data(){
        return{
          msg:true,
          phone:'',
          code:'',
          name:'',
          pwd:'',
          captcha:'',
          timeNum:'',
          circleFlag:false,
          imgUrl:'http://localhost:4000/captcha',
          showTip:false,
          tipText:''
        }
      },
      computed:{
        phoneNum(){
          return /^1\d{10}$/.test(this.phone)
        }
      },
      methods:{
        time(){
            if(!this.timeNum){
              this.timeNum = 30
              let tid = setInterval(()=> {
                this.timeNum--
                if(this.timeNum<=0){
                  clearInterval(tid)
                }
              },1000)
              //可以正常请求验证码
              axios.get('http://localhost:4000/sendcode?phone='+this.phone)
            }

        },
        //移动圆球
        moveCircle(){
          this.circleFlag = !this.circleFlag
        },
        //验证码图片刷新
        refreshImg(){
          return this.imgUrl='/api/captcha?'+Date.now()
        },
        //弹窗提示文字
        alertTipText(tipText){
          this.tipText=tipText
          this.showTip=true
          return
        },
        //登陆验证
        login(){
          //短信登陆
          if(this.msg){
            if(!this.phoneNum){
              this.alertTipText('手机号码不正确')
            }else if(!/^\d{6}$/.test(this.code)){
              this.alertTipText('验证码不正确')
            }
            //手机短信登陆请求
            axios.post('/api/login_sms',{phone:this.phone,code:this.code}).then(function (rep) {
              if(rep.data.code===0){
                //路由页面跳转
                this.$router.replace('/profile')
                //使用actions分发，让数据存入state
                this.$store.dispatch('save_userInfo',rep.data.data)
              }else {
                this.alertTipText('登陆失败')
              }
            }).catch(function (err) {
              console.log(err)
            })
            //账号密码登陆
          }else{
            if(!this.name){
              this.alertTipText('账号不正确')
            }else if(!this.pwd){
              this.alertTipText('密码不正确')
            }else if(!this.captcha){
              this.alertTipText('验证码不正确')
            }
            //用户名密码登陆请求
            axios.post('/api/login_pwd',{name:this.name,pwd:this.pwd,captcha:this.captcha}).then((rep) => {
              if(rep.data.code===0){
                //路由页面跳转
                this.$router.replace('/Profile')
                //使用actions分发，让数据存入state
                this.$store.dispatch('save_userInfo',rep.data.data)
              }else {
                this.alertTipText('登陆失败')
              }
            }).catch((err) => {
              console.log(err)
            })
          }
        },
        closeTip(){
          this.tipText = ''
          this.showTip = false
        }
      },
    components:{
      AlertTip
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.color
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.move
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
