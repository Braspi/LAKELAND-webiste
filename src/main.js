import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/global.less';
import axios from 'axios';
import Toast from "vue-toastification";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons';


library.add( faArrowRight, faGlobe )

axios.defaults.baseURL = 'https://api-v4.yshop.pl/shops/6'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(Toast)
    .use(router).mount('#app')
