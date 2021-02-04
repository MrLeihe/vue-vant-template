<template>
  <div>
    <div>
      <span @click="onTabChange(1)">今日排行</span>
      <span :style="{ 'margin-left': '20px' }" @click="onTabChange(2)"
        >总排行</span
      >
    </div>
    <div>{{ barTitle }}</div>
    <div v-show="current === 1">today</div>
    <div v-show="current === 2">total</div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  inject: ["pageConfig"],
  props: {
    barTitle: String
  },
  data() {
    return {
      current: 1
    };
  },
  methods: {
    onTabChange(type) {
      this.current = type;
      this.$emit("tabChange", { type: 2 });
    }
  }
};
</script>

<style lang="less" scoped></style>
