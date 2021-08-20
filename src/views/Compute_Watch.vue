<template>
  <h1>{{ Fullname }}</h1>
  <p />
  <input type="number" v-model.number="firstnumber" />
  <input type="number" v-model.number="secondnumber" />
  <input type="number" v-model.number="plusnumber" />
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      lastname: "Gunwoo",
      firstname: "Bae",
      firstnumber: "",
      secondnumber: "",
      plusnumber: "",
    };
  },
  computed: {
    Fullname() {
      return this.lastname + this.firstname;
    },
  },
  watch: {
    firstnumber() {
      this.plusnumber = this.firstnumber + this.secondnumber;
    },
    secondnumber() {
      this.plusnumber = this.firstnumber + this.secondnumber;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
