<template>
  <div class="home">
    <div class="name">stone</div>
    <loading />
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "@/components/Loading";

export default {
  name: "Home",
  components: {
    Loading
  }
};
</script>

<style lang="less" scoped>
:root {
  --text-color: #ff0000;
}

.name {
  color: var(--text-color);
}
</style>
