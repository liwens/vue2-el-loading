<template>
  <div>
    <!-- :element-loading-text="text" -->
    <!-- element-loading-background="rgba(0, 0, 0, 0.8)" -->

    <div
      v-loading="loading"
      element-loading-custom-class="loadingxxx"
      element-loading-color="red"
      element-loading-text="text"
      class="area"
    >
      这是内容
    </div>
    vant
    <button @click="hander">切换</button>
    {{ loading }}
    <!-- <van-tabs v-model="activeName" @change="change" v-loading="loading">
      <van-tab title="标签 1" name="a">
        <p>内容1</p>
        <p>内容1</p>
        <p>内容1</p>
        <p>内容1</p>
        <p>内容1</p>
        <p>内容1</p>
        <p>内容1</p>
        <p>内容1</p>
      </van-tab>
      <van-tab title="标签 2" name="b">内容 2</van-tab>
      <van-tab title="标签 3" name="c">内容 3</van-tab>
    </van-tabs> -->
  </div>
</template>

<script>
// import { Tab, Tabs } from "vant";
import Vue from "vue";
import vLoading from "./src/index.js";
import "vant/lib/index.css";
Vue.use(vLoading.directive, {
  color: "blue",
  background: "red"
});

export default {
  data() {
    return {
      loading: true,
      activeName: "a",
      "element-loading-text": "不可能啊"
    };
  },
  components: {
    // vanTab: Tab,
    // vanTabs: Tabs
  },
  methods: {
    hander() {
      this.loading = !this.loading;
    },
    change() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
  created() {
    var oMeta = document.createElement("mate");
    oMeta.setAttribute("name", "viewport");

    oMeta.setAttribute(
      "content",
      "width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
    document.getElementsByTagName("head")[0].appendChild(oMeta);
    // console.log(document.getElementsByTagName('head'));
  }
};
</script>

<style>
.area {
  width: 300px;
  height: 50px;
  margin: 100px;
}
* {
  padding: 0;
  margin: 0;
}
.loadingxxx {
  /* color: red; */
}
</style>
