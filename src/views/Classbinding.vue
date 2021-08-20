<template>
  <div v-bind:class="Active">Class Binding</div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      Active: "active",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
.active {
  color: red;
  background-color: aqua;
}
</style>
