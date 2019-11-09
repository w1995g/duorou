<template>
  <div id="wrapper">
    <!-- logo -->
    <div class="log">
      <p>肉多多,每日鲜肉</p>
    </div>
    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field
        :value="value"
        @touchstart.native.stop="show = true"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <!-- 登录 -->
    <van-button square type="primary">登录</van-button>
    <!-- 注册 -->
    <van-button square type="primary">注册</van-button>
    <!-- 数字键盘 -->

    <van-number-keyboard v-model="value" :show="show" :maxlength="6" @blur="show = false" />
  </div>
</template>


<script>
import Vue from 'vue';
import { Field, NumberKeyboard } from 'vant';

Vue.use(Field, NumberKeyboard);
export default {
  data() {
    return {
      show: false,
      value: ''
    }
  }

}
</script>

<style>
.log {
  width: 260px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: hotpink;
  margin: 20px auto;
}
#wrapper .van-button.van-button--primary {
  margin: 50px;
}
</style>