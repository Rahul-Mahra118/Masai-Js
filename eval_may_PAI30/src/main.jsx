import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes.js'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
    <RouterProvider router={router}>
   
    <App />
  
    </RouterProvider>
      </Provider>
  </StrictMode>,
)
