<template>
  <div class="loading">
    <span />
    <span />
    <span />
    <span />
    <span />
    <div class="loading-text">加载中...</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Loading",
  components: {}
};
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;

  span {
    display: inline-block;
    width: 8px;
    height: 40px;
    border-radius: 4px;
    background-color: rgba(107, 107, 107);
    animation-name: load;
    animation-duration: 1.04s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    margin: 0 3px;
  }

  span:nth-child(2) {
    animation-delay: 0.13s;
  }

  span:nth-child(3) {
    animation-delay: 0.26s;
  }

  span:nth-child(4) {
    animation-delay: 0.39s;
  }

  span:nth-child(5) {
    animation-delay: 0.52s;
  }

  .loading-text {
    color: #888;
    font-size: 14px;
  }

  @keyframes load {
    0%,
    100% {
      height: 40px;
    }

    50% {
      height: 60px;
      opacity: 0.6;
      margin-top: -20px;
    }
  }
}
</style>
