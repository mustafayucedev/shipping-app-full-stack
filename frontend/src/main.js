import { createApp } from "vue";
import App from "./App.vue";
import "./styles/style.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router";
import  { launguage }  from "./plugins/i18n";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia.use(piniaPluginPersistedstate))
.use(router)
.use(launguage)
.mount("#app");

export default app;
