<template>
  <div class="wrapper">
    <div class="intro">推荐专区</div>
    <!-- 加载更多 -->
    
  </div>
</template>


<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 500);
    }
  }

}

</script>

<style>
.intro {
  margin: 20px 2px;
}


</style>
