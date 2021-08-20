<template>
  <h1>count : {{ count }}</h1>
</template>
<script>
export default {
  name: "",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.user);
  },
  unmounted() {},
  methods: {},
};
</script>
