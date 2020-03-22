<template>
  <transition name="el-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="v-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]"
    >
      <div class="v-loading-spinner" :style="{ color: color || 'inherit' }">
        <circular v-if="!spinner" :color="color"></circular>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="el-loading-text" :style="{ color: color }">
          {{ text }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import circular from "./Circular";
export default {
  components: {
    circular
  },
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: false,
      visible: false,
      customClass: "",
      color: "#409EFF"
    };
  },

  methods: {
    handleAfterLeave() {
      this.$emit("after-leave");
    },
    setText(text) {
      this.text = text;
    }
  }
};
</script>
<style>
.v-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: hsla(0, 0%, 100%, 0.8);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}
.v-loading-mask.is-fullscreen {
  position: fixed;
}
.v-loading-spinner {
  left: 0;
  top: 0;
  z-index: 2001;
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
  min-height: 20px;
}

.el-loading-parent--relative {
  position: relative !important;
  pointer-events: none;
}
.el-loading-parent--hidden {
  overflow: hidden !important;
}
</style>
