<template>
  <ul>
    <li v-for="item in source" :key="item.key">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    source: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    source: {
      handler(newVal, oldVal) {
        console.log("sourceChange", newVal, oldVal);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="less" scoped></style>
