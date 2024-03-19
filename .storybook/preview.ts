import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import '../src/index.css'

// Stop duplicating registrations on storybook autodoc pages
// Ideally we shouldn't need to import a primeVue file directly, it should be in one of our own configured vue files
let setupComplete = false;

setup((app) => {
  if(!setupComplete) {
    app.use(PrimeVue)
    app.use(ToastService)
    app.component('Button', Button)
    app.component('Toast', Toast)
    setupComplete = true;
  }
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
