<template>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(product, i) in productist">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.delivery_fee }}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
      <tr>
        <th :key="index" v-for="(named, index) in manist">{{ named }}</th>
      </tr>
    </thead>
  </table>

  <h1 v-if="type === 'B'">안녕</h1>
  <h1 v-else-if="type === 'C'">B</h1>
  <h1 v-else>D</h1>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      productist: [
        {
          name: "김신혁키보드",
          price: "25000",
          category: "키보드",
          delivery_fee: "5000",
        },
        {
          name: "김신혁마우스",
          price: "25000",
          category: "마우스",
          delivery_fee: "5000",
        },
      ],
      manist: ["제품명", "가격", "카테고리", "배송료"],
      type: "D",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
