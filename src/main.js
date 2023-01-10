import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/global.less';
import axios from 'axios';
import Toast from "vue-toastification";


axios.defaults.baseURL = 'https://api-v4.yshop.pl/shops/6'

createApp(App)
    .use(Toast)
    .use(router).mount('#app')
