<template>
  <div class="mint-tabbar is-fixed">

    <!--<router-link to="./Msite" class="mint-tab-item is-selected">-->
    <router-link to="./Msite" class="mint-tab-item">
      <div class="mint-tab-item-icon"><i class="iconfont icon-canyin"></i></div>
      <div class="mint-tab-item-label">外卖</div>
    </router-link>
    <router-link to="./Search" class="mint-tab-item">
      <div class="mint-tab-item-icon"><i class="iconfont icon-sousuo"></i></div>
      <div class="mint-tab-item-label">发现</div>
    </router-link>
    <router-link to="./Order" class="mint-tab-item">
      <div class="mint-tab-item-icon "><i class="iconfont icon-dingdan"></i></div>
      <div class="mint-tab-item-label">订单</div>
    </router-link>
    <router-link to="./Profile" class="mint-tab-item">
      <div class="mint-tab-item-icon"><i class="iconfont icon-geren1"></i></div>
      <div class="mint-tab-item-label">我的</div>
    </router-link>

  </div>

</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.mui-active
  color red
</style>
