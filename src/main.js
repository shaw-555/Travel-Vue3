import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import router from './router'
import store from './store'
const app = createApp(App)
import axios from 'axios'
import VueAxios from 'vue-axios'
//require("../static/mock")
app.config.globalProperties.$axios = axios


app.use(store).use(router).use(VueAxios,axios).mount('#app')
