import { createApp } from 'vue'

import App from './App.vue'
import main from './components/main.vue'
import comment from './components/comment.vue'


const app = createApp(App)

app.component('main', main)
app.component('comment', comment)

app.mount('#app')