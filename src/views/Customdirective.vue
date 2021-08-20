<template>
  <input type="text" v-focus />
  <!-- focus라는 directive를 새로 만들어냄(전역에 추가함) -->
  <div style="height:1000px;">
    <p v-pin="position">페이지 고정 영역</p>
  </div>
</template>
<script>
export default {
  directives: {
    pin: {
      mounted(el, binding) {
        el.style.position = "fixed";
        el.style.top = binding.value.top + "px";
        el.style.left = binding.value.left + "px";
      },
    },
  },
  name: "",
  components: {},
  data() {
    return {
      position: { top: 50, left: 100 },
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
