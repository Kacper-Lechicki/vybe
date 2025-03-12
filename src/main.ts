import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/styles/base.scss';

import App from './app.vue';
import router from './router';

const app: ReturnType<typeof createApp> = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
