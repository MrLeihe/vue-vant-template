<template>
  <div class="about">
    <div>
      <button id="button" @click="handleClick">change</button>
      <span id="name">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    console.log("root--about->", this.$root.$data);
  },
  mounted() {
    this.nameNode = document.getElementById("name");
    this.button = document.getElementById("button");
    const mutationObserver = new MutationObserver((mutationList, observer) => {
      console.log("mutate--->", mutationList, observer);
    });
    mutationObserver.observe(this.nameNode, {
      attributes: true
    });

    this.button.click();
  },
  methods: {
    handleClick() {
      console.log("handleClick");

      Promise.resolve().then(() => {
        console.log("promise");
      });

      setTimeout(() => {
        console.log("setTimeout");
      }, 0);

      this.nameNode.setAttribute("name", "stone");
      this.nameNode.setAttribute("haha", "test");
    }
  }
};
</script>
