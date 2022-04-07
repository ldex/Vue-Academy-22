import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/animate.css'

const app = createApp(App).use(router);

// Global error handler
app.config.errorHandler = (error) => {
    console.error('Global error: ', error.message);
    router.push({ name: 'error'});
}

app.mount('#app');
