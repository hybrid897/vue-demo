import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import './index.css'
import Lara from '@/presets/lara' //import preset

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara //apply preset
})

app.use(createPinia())
