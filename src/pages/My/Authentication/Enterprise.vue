<template>
  <div id="Enterprise">
    <p>企业认证</p>
    <van-cell-group>
    <van-field
        required
        clearable
        label="公司名称："
        placeholder="                      输入公司名称"
        @click-right-icon="$toast('question')"
    />
    <van-field
        required
        clearable
        label="经营类型"
    >
    <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
    </van-field>
    <van-field
        required
        clearable
        label="公司地址："
        placeholder="                               请选择 >"
        @click-right-icon="$toast('question')"
    />
    <van-field
        required
        clearable
        label="详细地址："
        placeholder="                   街道、楼牌号等"
        @click-right-icon="$toast('question')"
    />
    <van-field
        required
        clearable
        label="社会信用代码:"
        placeholder="                               请输入"
        @click-right-icon="$toast('question')"
    />
    <van-field
        clearable
        label="联系人："
        placeholder="                               请输入"
        @click-right-icon="$toast('question')"
    />
    <van-field
        clearable
        label="联系电话："
        placeholder="                               请输入"
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
#Enterprise .submission{
    margin-top: 49%;
}
</style>>
