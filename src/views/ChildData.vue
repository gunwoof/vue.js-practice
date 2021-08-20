<template>
  <h1>Name: {{ Name }}</h1>
  <h1>likes: {{ likes }}</h1>
  <h1>itOk: {{ itOk }}</h1>
  <h1>commandId: {{ commandeId }}</h1>
  <h1>auther: {{ auther }}</h1>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {
    Name: {
      type: String,
      default: "문자열입니다",
    },
    likes: {
      type: Number,
      default: 0,
    },
    itOk: {
      type: Boolean,
      default: true,
    },
    commandeId: {
      type: Array,
    },
    auther: {
      type: Object,
    },
  },
};
</script>
