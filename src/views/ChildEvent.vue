<template>
  <button @click="childFunc" ref="btn">click</button>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      msg: "메세지",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    childFunc() {
      this.msg = "변경된 메세지";
    },
  },
};
</script>
