<template>
  <div class="wrapper2">
    <ul>
      <li>
        <div class="classifyBox">
          <img src="../../../public/images/classify-pig.jpeg" class="classiftImg"/>
        </div>
        <p class="classifyTitle">猪肉专区</p>
      </li>
      <li>
        <div class="classifyBox">
          <img src="../../../public/images/classify-chicken.jpg" class="classiftImg"/>
        </div>
        <p class="classifyTitle">禽类专区</p>
      </li>
      <li>
        <div class="classifyBox">
          <img src="../../../public/images/classify-bulles.jpg"  class="classiftImg"/>
        </div>
        <p class="classifyTitle">牛肉专区</p>
      </li>
      <li>
        <div class="classifyBox">
          <img src="../../../public/images/classify-all.jpg" class="classiftImg"/>
        </div>
        <p class="classifyTitle">加工产品</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper2 {
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
  width: 100%;
  height: 55px;
}
.classifyTitle {
  text-align: center;
  margin-top: 5px;
  font-size: 12px;
}
.classiftImg{
  width:100%;
  height:55px;

}
</style>
