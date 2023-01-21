import { createApp } from 'vue'
import App from './App.vue'
// Importar o mitt
import mitt from 'mitt'

const emitter = mitt()


createApp(App).mount('#app')
