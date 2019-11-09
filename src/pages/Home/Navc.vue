<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/shoppingmall" icon="bag-o">商城</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style>
</style>