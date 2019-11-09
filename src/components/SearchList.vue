<template>
  <div class="wrappers">
    <router-link to="/home">
      <button class="return">返回</button>
    </router-link>
    <Search></Search>
    <div class="title">
      <h5>搜索记录</h5>
      <div class="content">
        <p class="first">
          <span>新西兰牛肉</span>
        </p>
        <p class="middle">马来西亚羔羊肉</p>
        <p>黑猪肉</p>
        <br />
        <p class="last">散养小笨鸡</p>
        <p class="second">全聚德烤鸭</p>
        <p>精选里脊肉</p>
        <br />
        <p>优质牛上脑</p>
      </div>
    </div>
  </div>
</template>

<script>

import Search from '../components/Search';



export default {
  components: {
    Search
  },
  
 
}
</script>
<style>
.wrappers p {
  font-size: 12px;
  display: inline-block;
  height: 100%;
  background: #e0e0e0;
  margin-right: 25px;
}
.title {
  margin-left: 30px;
}
.first {
  margin-top: -20px;
  margin-right: 10px;
}
.return {
  margin: 5px 3px -50px 3px;
}
.content {
  margin-top: -20px;
}
</style>