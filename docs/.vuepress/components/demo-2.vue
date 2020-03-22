<template>
  <van-tabs
    v-model="activeName"
    @change="change"
    v-loading="isLoading"
    element-loading-text="拼命加载中.."
    element-loading-color="#32CD32"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <van-tab title="标签 1" name="a">
      <p>内容1</p>
      <p>内容1</p>
      <p>内容1</p>
    </van-tab>
    <van-tab title="标签 2" name="b">内容 2</van-tab>
    <van-tab title="标签 3" name="c">内容 3</van-tab>
  </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a",
      isLoading: true
    };
  },
  methods: {
    change() {}
  }
};
</script>

<style></style>
