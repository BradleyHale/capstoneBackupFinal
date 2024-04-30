import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js' // Import the router instance
import mitt from 'mitt'

import './index.css'

const emitter = mitt()

const app = createApp(App)
app.use(router) // Use the router instance

// Global Event Bus
app.config.globalProperties.emitter = emitter;
app.mount('#app')
