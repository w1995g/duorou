<template>
  <div>
    我是商品首页
    <Navc></Navc>
    <router-view></router-view>
  </div>
</template>
<script>
import Navc from '../Home/Navc';
export default {
  components: {
    Navc
  }

}
</script>
<style lang="less">
</style>