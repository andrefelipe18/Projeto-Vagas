import { createApp } from 'vue'
import App from './App.vue'

// Importar o mitt
import mitt from 'mitt'

// Criar um emitter
const emitter = mitt()

// Iniciar a instancia do vue com base no componente
const app = createApp(App)

//Configurar a instancia do pacote mitt como sendo uma propriedade global
//Essa propriedade global pode ser acessada em qualquer componente
app.config.globalProperties.emitter = emitter

// Montar a instancia do vue com base no elemento #app
app.mount('#app')