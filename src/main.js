import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/global.less';
import axios from 'axios';
import Toast from "vue-toastification";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faGlobe, faPeopleRobbery, faTag } from '@fortawesome/free-solid-svg-icons';


library.add( faArrowRight, faGlobe, faPeopleRobbery, faTag )

axios.defaults.baseURL = 'https://api-v4.yshop.pl/shops/14'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(Toast)
    .use(router).mount('#app')
