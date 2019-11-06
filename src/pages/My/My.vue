<template>
  <div>
    我是个人首页
    <van-cell-group class="user-group">
        <van-skeleton title avatar :row="1">
            <div>www</div>
        </van-skeleton>
      <van-cell class="cellDJ"  title="全部订单" is-link>
      </van-cell>
      <van-row class="user-links">
        <van-col span="4">
          <van-icon name="records" />待审核
        </van-col>
        <van-col span="4">
          <van-icon name="completed" />待确认
        </van-col>
        <van-col span="4">
          <van-icon name="pending-payment" />待付款
        </van-col>
        <van-col span="4">
          <van-icon name="tosend" />待发货
        </van-col>
        <van-col span="4">
          <van-icon name="logistics" />待收货
        </van-col>
        <van-col span="4">
          <van-icon name="service-o" />售后
        </van-col>
      </van-row>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="location-o" title="收货地址" is-link />
      <van-cell icon="sign" title="个人认证" is-link />
      <van-cell icon="cash-on-deliver" title="企业认证" is-link />
      <van-cell icon="chat-o" title="联系客服" is-link />
      <van-cell icon="setting-o" title="设置" is-link />
    </van-cell-group>
    <Navc></Navc>
  </div>
</template>
<script>
import Navc from "../Home/Navc.vue";
import { Row, Col, Icon, Cell, CellGroup } from "vant";

export default {
  components: {
    Navc,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>
<style lang="less">
.user-poster {
  width: 100%;
  height: 53vw;
  display: block;
}
.user-group {
  margin-bottom: 15px;
}
.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  .van-icon {
    display: block;
    font-size: 24px;
  }
}
.cellDJ{
    margin-bottom: -20px;
}
</style>