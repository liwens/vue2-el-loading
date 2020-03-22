# Loading 加载

## 特性

- 开箱即用/极简使用
- 体积：9k

## 文档 和 demo

:notebook_with_decorative_cover: :point_right:[document & demo](https://liwens.github.io/vue2-el-loading/)

## :popcorn: 安装

`npm i vue2-el-loading --save-dev`

## :zap:引入

在 `main.js` 文件中

```js
import vue from "Vue";
import VLoading from "vue2-el-loading";
Vue.use(vLoading);
```

### :sunny:全局配置

```js {4,5}
import vue from "Vue";
import VLoading from "vue2-el-loading";
Vue.use(vLoading, {
  color: "green", //也支持 rgb,hsl,16机制颜色码
  background: "yellow" //也支持 rgb,hsl,16机制颜色码
});
```

## :crown:区域加载

可以在任意元素/UI 框架元素 上绑定 `v-loading`, 如下面`vant` 的`tabs`组件
<demo-1/>

::: details 点击查看代码

```vue {2,18}
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
```

:::

## :school_satchel:自定义

可局部自定义`加载文案`和`背景色`,`类名`。<br/>
在绑定了 v-loading 指令的元素上添加 `element-loading-text` 属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`element-loading-background` 属性设定背景色值。`element-loading-custom-class`额外增加一个自定义类名
::: tip
暂不支持自定义图标
:::

::: tip
局部配置优先级高于[全局配置](#全局配置)
:::
<demo-2 />

::: details 点击查看代码

```vue {6,7,8,9}
<template>
  <van-tabs
    v-model="activeName"
    @change="change"
    v-loading="isLoading"
    element-loading-text="拼命加载中.."
    element-loading-color="#32CD32"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    element-loading-custom-class="customClass"
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
```

:::

## :unicorn:全屏 loading

当使用指令方式时，全屏遮罩需要添加 `fullscreen` 修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用 `lock` 修饰符；

<demo-3 />
::: details 点击查看代码

```vue {5,12}
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
```

:::
