<template>
  <div class="about">
    <nav-bar></nav-bar>
    <h1>This is an about page</h1>
    <button @click="handleRoute">点击</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data: () => {
    return {
      a: "stone"
    };
  },
  customOption: "foo",
  beforeRouteUpdate(to, from, next) {
    console.log("params:", to.params);
    next();
  },
<<<<<<< HEAD
=======
  mounted() {
    console.log("_router:", this.$router.history.current === this.$route);
  },
>>>>>>> ef4a0a2... router test
  methods: {
    handleRoute() {
      history.pushState({ page: 1 }, "about page", "/about");
    }
  }
};
</script>
