import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TagBlock from "@/components/TagBlock.vue";

const app = createApp(App);
app.component("tag-block", TagBlock);
app.use(store).use(router).mount("#app");