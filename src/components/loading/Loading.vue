<template>
  <div class="eva-loading" v-if="show">
    <div class="loading-box">
      <div class="circle circle1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="circle circle2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="circle circle3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {

    };
  },
  mounted() { },
  methods: {

  },
};
</script>

<style lang="less" scoped>
.eva-loading {
  position: fixed;
  z-index: 2020;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 100%, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .loading-box {
    width: 30px;
    height: 30px;
    margin: 50px auto;
    position: relative;
  }
  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .circle span {
    width: 8px;
    height: 8px;
    display: inline-block;
    background: #1989fa;
    border-radius: 100%;
    position: absolute;
    animation: mycircle 1.2s infinite ease-in-out;
    animation-fill-mode: both;
  }
  .circle2 {
    transform: rotateZ(45deg);
  }
  .circle3 {
    transform: rotateZ(90deg);
  }
  .circle > span:nth-child(1) {
    top: 0;
    left: 0;
  }
  .circle > span:nth-child(2) {
    top: 0;
    right: 0;
  }
  .circle > span:nth-child(3) {
    right: 0;
    bottom: 0;
  }
  .circle > span:nth-child(4) {
    left: 0;
    bottom: 0;
  }
  .circle2 > span:nth-child(1) {
    animation-delay: -1.1s;
  }
  .circle3 > span:nth-child(1) {
    animation-delay: -1s;
  }
  .circle1 > span:nth-child(2) {
    animation-delay: -0.9s;
  }
  .circle2 > span:nth-child(2) {
    animation-delay: -0.8s;
  }
  .circle3 > span:nth-child(2) {
    animation-delay: -0.7s;
  }
  .circle1 > span:nth-child(3) {
    animation-delay: -0.6s;
  }
  .circle2 > span:nth-child(3) {
    animation-delay: -0.7s;
  }
  .circle3 > span:nth-child(3) {
    animation-delay: -0.4s;
  }
  .circle1 > span:nth-child(4) {
    animation-delay: -0.3s;
  }
  .circle2 > span:nth-child(4) {
    animation-delay: -0.2s;
  }
  .circle3 > span:nth-child(4) {
    animation-delay: -0.1s;
  }
  @keyframes mycircle {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }
}
</style>
