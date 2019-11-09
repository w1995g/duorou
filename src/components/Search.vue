<template>
  <div class="wrapper">
    <router-link to="/searchlist">
      <van-search placeholder="请输入搜索关键词" />
    </router-link>
  </div>
</template>
<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);

export default {
}
</script>

<style>
.wrapper p {
    display: inline-block;
    width:60px;
    height:30px;
}
</style>