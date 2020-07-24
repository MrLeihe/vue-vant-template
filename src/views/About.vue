<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleRoute">点击</button>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
    console.log("params:", to.params);
    next();
  },
  methods: {
    handleRoute() {
      history.replaceState({ page: 1 }, "about page", "/about");
    }
  }
};
</script>
