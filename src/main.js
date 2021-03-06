import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TagBlock from "@/components/base-components/TagBlock.vue";
import StatusBlock from "@/components/base-components/StatusBlock.vue";
import IconBase from "@/components/icons/IconBase.vue";
const app = createApp(App);
app.component("tag-block", TagBlock);
app.component("icon-base", IconBase);
app.component("status-block", StatusBlock);
app.use(store).use(router).mount("#app");