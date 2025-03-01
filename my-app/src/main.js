import { createApp } from 'vue'

import App from './App.vue'
import MainComponent from './components/main.vue'

const app = createApp(App)

app.component('MainComponent', MainComponent)

app.mount('#app')