import { createApp } from 'vue'

import App from './App.vue'
import main from './components/main.vue'


const app = createApp(App)

app.component('main', main)


app.mount('#app')