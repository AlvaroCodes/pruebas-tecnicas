// ShoppingCartContext.jsx
import React, { createContext, useState } from 'react'

// Crea el contexto
export const ShoppingCartContext = createContext()

// Crea el proveedor que envolverá la parte de la app que necesite acceso al carrito
export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Función para agregar un producto al carrito
  const addItem = (item) => setCart([...cart, item])

  return (
    <ShoppingCartContext.Provider value={{ cart, addItem }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
