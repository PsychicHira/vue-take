<template>
    <div>
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.show"></FooterGuide>
    </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import axios from 'axios'
  import {mapState} from 'vuex'
  export default {
    components: {
      FooterGuide
    },
    mounted: async function getInfo(){
        await axios.get('/api/userinfo').then((res)=>{
          if(res.data.code===0){
            this.$store.state.userInfo = res.data.data
            console.log('自动登陆成功了')
          }else{
            this.$router.replace('/login')
          }
        })
      },
    computed:{
      ...mapState(['userInfo']),
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>
