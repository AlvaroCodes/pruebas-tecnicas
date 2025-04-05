import { RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router'
import { ShoppingCartProvider } from './context/ShoppingCart'

createRoot(document.getElementById('root')).render(
  <ShoppingCartProvider>
    <RouterProvider router={router} />
  </ShoppingCartProvider>
)
