import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import '../src/index.css'

setup((app) => {
  app.use(PrimeVue, { ripple: true })
  app.use(ToastService)
  app.component('Button', Button)
  app.component('Toast', Toast)
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
