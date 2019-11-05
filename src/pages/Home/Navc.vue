<template>
  <van-tabbar v-model="active">
    <van-tabbar-item info="3">
      <router-link to="/home">
        <span>首页</span>
      </router-link>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
    </van-tabbar-item>
    <van-tabbar-item icon="search">
      <router-link to="/shoppingmall">
        <span>商城</span>
      </router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      <router-link to="/my">
        <span>个人</span>
      </router-link>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>
<style>
</style>