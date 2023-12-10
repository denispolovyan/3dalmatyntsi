import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import {routes} from './routes.js'

import App from './App.vue'

// router 

const router = createRouter({
    history: createWebHistory(), 
    routes: routes
})
const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
