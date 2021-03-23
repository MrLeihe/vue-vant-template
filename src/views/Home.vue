<template>
  <div>
    <div @click="onListChange">我是首页</div>
    <div ref="msg">{{ message }}</div>
    <List :source="sourceList" />
  </div>
</template>

<script>
import List from "../components/List";
export default {
  components: {
    List
  },
  data() {
    return {
      sourceList: [],
      message: "123"
    };
  },
  mounted() {},
  methods: {
    test() {
      var arr = [];
      var bValue = "";
      Object.defineProperty(arr, "0", {
        get() {
          console.log("访问数组属性");
          return bValue;
        },
        set(value) {
          console.log("设置数组元素", value);
          bValue = value;
        },
        enumerable: true,
        configurable: true
      });
    },
    onListChange() {
      this.$set(this.sourceList, this.sourceList.length, {
        name: "stone",
        key: Math.random()
          .toString(36)
          .slice(-8)
      });

      // message
      this.message = "hello world";
      console.log(this.$refs.msg.textContent);
      this.$nextTick(() => {
        console.log("next-tick", this.$refs.msg.textContent);
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
