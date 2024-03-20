import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import '../src/index.css'
import InputSwitch from 'primevue/inputswitch'

// Stop duplicating registrations on storybook autodoc pages
// Ideally we shouldn't need to import a primeVue file directly, it should be in one of our own configured vue files
let setupComplete = false

setup((app) => {
  if (!setupComplete) {
    app.use(PrimeVue, { unstyled: true })
    app.component('Button', Button)
    app.component('InputSwitch', InputSwitch)
    setupComplete = true
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
