<template>
  <div id="SutUp">
    <p>设置</p>
    <van-cell-group>
    <van-field
        clearable
        label="更改手机号"
        placeholder="                                        >"
        @click-right-icon="$toast('question')"
    />
    <van-field
        clearable
        label="关于我们"
        placeholder="                                        >"
        @click-right-icon="$toast('question')"
    />
    </van-cell-group>
    <van-button type="default" size="large" class="submission">提交</van-button>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
#SutUp .submission{
    margin-top: 5%;
}
</style>>
