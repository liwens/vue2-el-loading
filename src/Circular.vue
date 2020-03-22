<template>
  <svg class="circular" viewBox="25 25 50 50">
    <circle
      class="circular__path"
      :style="{ stroke: color }"
      cx="50"
      cy="50"
      r="20"
      fill="none"
    />
  </svg>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'Circular',
  props: {
    color: {
      // 颜色
      type: String,
      default: '#409EFF',
    },
  },
}
</script>

<style>
.circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}
.circular__path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}

@keyframes loading-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
