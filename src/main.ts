import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.router';

// Import toast plugin and styles
import Toast, { POSITION, type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

/*
  configure toast plugin
*/
const toastOptions: PluginOptions = {
  // You can set your default options here
  hideProgressBar: true,
  position: POSITION.TOP_RIGHT,
  timeout: 4000,
};

import './assets/main.css';

const app = createApp(App);

app.use(Toast, toastOptions);
app.use(router);
app.mount('#app');
