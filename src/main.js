import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'flowbite';
import router from './routers'

const app = createApp(App);
app.use(router);
app.mount('#app');