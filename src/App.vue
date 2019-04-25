<template>
    <div>
      <router-view></router-view>
      <FooterGuide></FooterGuide>
    </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
  components: {
    FooterGuide
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>
