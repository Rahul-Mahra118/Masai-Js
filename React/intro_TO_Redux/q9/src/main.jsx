
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './app/store.js'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
