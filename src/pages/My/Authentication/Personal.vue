<template>
  <div id="personal">
    <p>个人认证</p>
    <div class="log">
      <p>肉多多,每日鲜肉</p>
    </div>
    <van-cell-group error-message="手机号码格式错误">
      <h5 style="color:#969799; margin:0% 5%;">手机号将作为登录账号</h5>
      <van-field
        placeholder="手机号码"
        left-icon="graphic"
        icon="graphic"
        @click-icon="$toast('question')"
      />
    </van-cell-group>
    <van-cell-group error-message="验证码错误">
      <van-field
        center
        clearable
        placeholder="短信验证码"
        left-icon="youzan-shield"
        icon="youzan-shield"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-cell-group error-message="姓名格式错误">
        <van-field
          placeholder="真实姓名"
          left-icon="manager"
          icon="manager"
          @click-icon="$toast('question')"
        />
      </van-cell-group>
    </van-cell-group>
    <input type="checkbox" class="lef" v-model="checked" />
    <h6>
      已阅读并同意
      <a href="#">《美肉商城用户服务协议》</a>
    </h6>
    <van-button square type="primary" size="large" id="personalLogin">登录</van-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style lang="less">
.ico {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
}
.ino div {
  float: left;
}
.message {
  height: 50px;
  margin: 0px;
}
#personal #personalLogin {
  width: 80%;
  height: 80%;
  left: 10%;
}
#personal h6 {
  display: inline-block;
  margin: 5% 0%;
}
#personal .lef {
  margin-left: 5%;
}
</style>>
