// 轮播图
<template>
  <!-- 轮播图 -->
  <div class="wrapper">
    <van-swipe :autoplay="2000" indicator-color="white">
    <van-swipe-item>
      <div class="imgBox">
        <img src="../../../public/images/4.jpg" alt />
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="imgBox">
        <img src="../../../public/images/5.jpg" alt />
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="imgBox">
        <img src="../../../public/images/6.jpg" alt />
      </div>
    </van-swipe-item>
  </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {

}
</script>
<style>
img {
  object-fit: contain;
  display: block;
  width: 100%;
  height: 180px;
}
.imgBox{
  width:100%;
  height:100%px;
}
</style>