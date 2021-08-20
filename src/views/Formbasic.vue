<template>
  <select v-bind:value="sampleData">
    <option value="02">서울</option>
    <option value="031">경기도</option>
    <option value="064">제주도</option>
  </select>

  <input type="text" v-bind:value="sampleData" />

  <p />
  <label
    ><input type="checkbox" v-bind:value="checkvalue[0]" v-model="picked" />{{
      checkvalue[0]
    }}</label
  >
  <label
    ><input type="checkbox" v-bind:value="checkvalue[1]" v-model="picked" />{{
      checkvalue[1]
    }}</label
  >
  <label
    ><input type="checkbox" v-bind:value="checkvalue[2]" v-model="picked" />{{
      checkvalue[2]
    }}</label
  >
  <br />
  <span>체크한 지역 : {{ picked }}</span>

  <p />
  <input type="text" v-model="TextValue" />
  <button v-bind:disabled="TextValue === ''">Click</button>

  <p />
  <img v-bind:src="Vlogo" />
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "064",
      picked: [],
      checkvalue: ["서울", "경기도", "제주도"],
      TextValue: "",
      Vlogo: "../assets/logo.png",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
