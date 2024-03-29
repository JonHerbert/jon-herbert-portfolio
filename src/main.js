import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { MotionPlugin } from "@vueuse/motion";

//import { AnimateInViewDirective } from "@neeravp/vue-3-animate-in-view";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Divider from "primevue/divider";
import Sidebar from "primevue/sidebar";

import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/lara-dark-teal/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(MotionPlugin);
app.use(PrimeVue, { inputStyle: "filled", ripple: true });

app.component("Button", Button);
app.component("Divider", Divider);
app.component("Sidebar", Sidebar);

app.mount("#app");
