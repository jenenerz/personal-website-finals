import { createApp } from 'vue'

import App from './App.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import comment from './components/comment.vue'


const app = createApp(App)

app.component('PersonalProfile', PersonalProfile)
app.component('comment', comment)

app.mount('#app')