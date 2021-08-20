import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import serverapi from "./serverapi";
import store from "./store";

createApp(App)
  .use(router)
  .mixin(serverapi)
  .directive("focus", {
    mounted(el) {
      el.focus();
    },
  })
  .use(store)
  .mount("#app");

window.Kakao.init("0c35cf70ef62e3e1f75f5086093f80ae"); // 발급받은 앱 키
