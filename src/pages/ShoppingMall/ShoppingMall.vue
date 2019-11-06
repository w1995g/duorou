<template>
  <div>
    <span>全部商品</span>
    <Search></Search>
    
    <van-sidebar v-model="activeKey">
      <router-link to="/ShoppingMall/ImportedPork">
        <van-sidebar-item title="进口猪肉" />
      </router-link> 
      <router-link to="/ShoppingMall/DomesticPork">
        <van-sidebar-item title="国产猪肉" />
      </router-link>
      <router-link to="/ShoppingMall/Chicken">
        <van-sidebar-item title="鸡产品" />
      </router-link>
      <router-link to="/ShoppingMall/Duck">
        <van-sidebar-item title="鸭产品" />
      </router-link>
      <router-link to="/ShoppingMall/ImportedBeef">
        <van-sidebar-item title="进口牛肉" />
      </router-link>
      <router-link to="/ShoppingMall/Processed">
        <van-sidebar-item title="加工产品" />
      </router-link>
    </van-sidebar>
          <router-view class="Shopping"></router-view>
    <Navc></Navc>
  </div>
</template>
<script>
import Navc from '../Home/Navc';
import Search from '../../components/Search';
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  components: {
    Navc,
    Search
  }

}
</script>
<style lang="less">
.Shopping{
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>