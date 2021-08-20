<template>
  <div>
    <button @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송비</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productlist">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_fee }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import ApiMixin from "../serverapi.js";
export default {
  // mixins: [ApiMixin],
  name: "",
  components: {},
  data() {
    return {
      productlist: [],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async getProductList() {
      this.productlist = await this.$api(
        "https://35206039-7228-454c-a725-81b885077d6d.mock.pstmn.io/productlist",
        "get",
        {}
      );
      console.log(this.productlist);
    },
    // async api(url, method, data) {
    //   return (
    //     await axios({
    //       url: url,
    //       method: method,
    //       data: data,
    //     }).catch((e) => {
    //       console.log(e);
    //     })
    //   ).data;
    // },
  },
};
</script>
