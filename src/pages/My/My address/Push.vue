<template>
  <div>
    编辑地址
    <van-address-edit
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
    />
  </div>
</template>
<script>
export default {
  
  data() {
    return {
        // areaList,
      searchResult: []
    };
  }
  //   methods: {
  //     onSave() {
  //       Toast("save");
  //     },
  //     onDelete() {
  //       Toast("delete");
  //     },
  //     onChangeDetail(val) {
  //       if (val) {
  //         this.searchResult = [
  //           {
  //             name: "黄龙万科中心",
  //             address: "杭州市西湖区"
  //           }
  //         ];
  //       } else {
  //         this.searchResult = [];
  //       }
  //     }
  //   }
};
</script>
<style lang="less">
</style>