import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

// Run
const app = createApp(App).use(router)
app.mount('#app')
