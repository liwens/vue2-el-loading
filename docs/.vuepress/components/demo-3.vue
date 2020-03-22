<template>
  <div>
    <van-button
      type="primary"
      v-loading.fullscreen="isLoading"
      @click="openFullScreen1"
      >点击开启全屏loading</van-button
    >

    <van-button
      type="primary"
      v-loading.fullscreen.lock="isLoading2"
      @click="openFullScreen2"
      >点击开启全屏loading,并且锁定屏幕滚动</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      isLoading2: false
    };
  },
  methods: {
    openFullScreen1() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      this.isLoading2 = true;
      setTimeout(() => {
        this.isLoading2 = false;
      }, 2000);
    }
  }
};
</script>

<style></style>
