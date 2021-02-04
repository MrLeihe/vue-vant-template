<template>
  <div class="home">
    <div class="name">{{ name }}</div>
    <button @click="onChange">更改名字</button>
    <Loading :childName="childName" />
    <div class="test">{{ content }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "@/components/Loading";

export default {
  name: "Home",
  components: {
    Loading
  },
  data() {
    return {
      name: "stone",
      themeColor: "#fff",
      current: 1,
      barTitle: "已发货",
      childName: "子组件",
      content: "测试文字换行\n点击发送福达合金史蒂芬霍金开始的"
    };
  },
  directives: {
    color: {
      inserted: function(el, binding) {
        el.style.color = binding.value.themeColor;
        el.innerHTML = binding.value.text;
      }
    }
  },
  provide() {
    return {
      pageConfig: { themeColor: this.themeColor }
    };
  },
  activated() {
    console.log("activated----");
  },
  deactivated() {
    console.log("deactivated----");
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter----", this);
    next(vm => {
      console.log("beforeRouteEnter----next", vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate----");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave----");
    next();
  },
  beforeCreate() {
    console.log("beforeCreate----");
  },
  created() {
    console.log("created----");
  },
  beforeMount() {
    console.log("beforeMount----");
  },
  mounted() {
    console.log("mounted----");
  },
  beforeUpdate() {
    console.log("beforeUpdate----");
  },
  updated() {
    console.log("updated----");
  },
  beforeDestroy() {
    console.log("beforeDestroy----");
  },
  destroyed() {
    console.log("destroyed----");
  },
  methods: {
    onTabChange(tab) {
      this.current = tab.type;
      console.log("onTabChange:", tab);
    },
    onChange() {
      this.childName = "子组件以改变";
    }
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

.block {
  width: 100%;
  height: 500px;
  background-color: turquoise;
}

.test {
  white-space: pre-line;
  height: 100px;
  position: relative;

  @media screen {
  }

  &::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 1px solid #ededed;
    transform: scale(0.5);
    transform-origin: left top;
  }
}
</style>
