<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "페이지타이틀입니다",
    },
  },
};
</script>
