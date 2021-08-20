import axios from "axios";
export default {
  methods: {
    async $api(url, method, data) {
      return (
        await axios({
          url: url,
          method: method,
          data: data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
