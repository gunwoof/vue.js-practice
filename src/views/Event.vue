<template>
  <input type="text" value="!!" @keyup.enter="Alert()" />
  <input type="button" value="SEt7" @click="Alert()" />

  <select v-model="Selectivevalue" @change="Changeselector">
    <option>제주 </option>
    <option>서울 </option>
    <option>경기도 </option>
  </select>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      Selectivevalue: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    Alert() {
      alert(5);
    },
    Changeselector() {
      alert(this.Selectivevalue);
    },
  },
};
</script>
