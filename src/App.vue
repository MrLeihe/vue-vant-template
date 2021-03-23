<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'About', query: { id: 1 } }">About</router-link>
      <!-- <keep-alive> -->
      <router-view />
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import VConsole from "vconsole";
console.log("haha");
export default {
  mounted() {
    console.log("VConsole", VConsole);
    var vconsole = new VConsole();
    console.log("test vconsole");
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  // 横屏
  @media all and (orientation: landscape) {
    // background: gold;
  }

  // 竖屏
  @media all and (orientation: portrait) {
    // background: green;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  -webkit-tap-highlight-color: transparent;
}
</style>
