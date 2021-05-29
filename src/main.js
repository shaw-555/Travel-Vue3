import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')
