<template>
  <van-tabs v-model="activeName" @change="change" v-loading="isLoading">
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
