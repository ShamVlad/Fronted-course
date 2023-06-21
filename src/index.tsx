import { createRoot } from 'react-dom/client'
import { App } from './app/app'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './app/providers/ThemeProvider/ui/themeProvider'

import './shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
