import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import './index.css'
import ToastService from 'primevue/toastservice'
import Lara from '@/presets/lara' //import preset

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara //apply preset
})
app.use(ToastService)
app.use(createPinia())
