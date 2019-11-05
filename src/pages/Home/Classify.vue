<template>
  <div class="wrapper">
    <ul>
      <li>
        <div class="classifyBox"></div>
        <p class="classifyTitle">猪肉</p>
      </li>
      <li>
        <div class="classifyBox"></div>
        <p class="classifyTitle">牛肉</p>
      </li>
      <li>
        <div class="classifyBox"></div>
        <p class="classifyTitle">鸡肉</p>
      </li>
      <li>
        <div class="classifyBox"></div>
        <p class="classifyTitle">狗肉</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper {
  margin: 20px;
}
ul {
  display: flex;
}
li {
  width: 25%;
  height: 60px;
  margin: 0 10px;
}
.classifyBox {
  background: gray;
  width: 100%;
  height: 55px;
}
.classifyTitle {
  text-align: center;
  margin-top: 5px;
  font-size: 13px;
}
</style>
