import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router.jsx'
import { ProductContextProvider } from './context/ProductContextProvider.jsx'
import { CartContextProvider } from './context/CartcontextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
    <ProductContextProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </ProductContextProvider>
    </CartContextProvider>
  </StrictMode>,
)
