import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";
const store = createStore({
  state() {
    return {
      count: 0,
      user: {},
    };
  },
  plugins: [persistedstate({ path: ["user"] })],
  mutations: {
    increment(state) {
      state.count++;
    },
    user(state, data) {
      state.user = data;
    },
  },
});

export default store;
