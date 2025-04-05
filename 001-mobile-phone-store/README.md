# Front-End Test (⚛️ React): Compra de Móviles 📱✨

## Índice
- [🚀 Descripción del Proyecto](#-descripción-del-proyecto)
  - [PLP (Product List Page)](#plp-product-list-page)
  - [PDP (Product Details Page)](#pdp-product-details-page)
- [⚙️ Requisitos Técnicos](#%EF%B8%8F-requisitos-técnicos)
- [🌐 Integración con API](#-integración-con-api)
- [🎨 Componentes y Diseño](#-componentes-y-diseño)
- [🚀 Instrucciones de Ejecución](#-instrucciones-de-ejecución)
- [ℹ️ Información sobre el ejercició resuelto](#ℹ️-información-sobre-el-ejercició-resuelto)

## 🚀 Descripción del Proyecto

Desarrolla una **Single Page Application (SPA)** con dos vistas principales:

### PLP (Product List Page)
- Muestra un listado de productos obtenidos del API.
- Incluye búsqueda en tiempo real (filtrado por marca y modelo).
- Diseño adaptable con máximo 4 productos por fila.

### PDP (Product Details Page)
- Detalla el producto en dos columnas: imagen y detalles/acciones.
- Opción para volver a la lista de productos.

## ⚙️ Requisitos Técnicos

- **Framework**: Utiliza **React** o **Preact** (preferentemente sin TypeScript).
- **JavaScript**: ES6.
- **Estructura**: Puedes usar un boilerplate para iniciar el proyecto.
- **Routing**: Implementa navegación en el cliente (SPA, sin SSR).
- **Scripts del proyecto**:
  - `npm start`: Modo desarrollo.
  - `npm run build`: Compilación para producción.
  - `npm test`: Ejecución de tests.
  - `npm run lint`: Comprobación de código.

## 🌐 Integración con API

Usa el siguiente dominio y endpoints:

- **Listado de productos**:  
  `GET /api/product`  
  *Respuesta*: Array de productos.

- **Detalle del producto**:  
  `GET /api/product/:id`  
  *Respuesta*: Objeto con los detalles del producto.

- **Añadir a la cesta**:  
  `POST /api/cart`  
  *Body*: `{ id, colorCode, storageCode }`  
  *Respuesta*: `{ count }` (número de productos en la cesta).

**Importante:**  
Implementa un sistema de cache en el cliente con una expiración de **1 hora** para evitar llamadas repetitivas al API.

##  🎨 Componentes y Diseño

- **Header**:
  - Muestra el título o ícono (enlace a la vista principal).
  - Breadcrumbs y contador de ítems en la cesta.
  
- **Barra de Búsqueda**:
  - Input que permite filtrar productos en tiempo real.
  
- **Elemento de Producto (Item)**:
  - Visualiza imagen, marca, modelo y precio.
  
- **Detalles del Producto (PDP)**:
  - Distribuye la vista en dos columnas: imagen y detalles.
  - Incluye selectores para opciones (almacenamiento y color) y botón para añadir al carrito.

## 🚀 Instrucciones de Ejecución

1. **Clona el repositorio.**
2. **Instala las dependencias:**  
   `npm install`
3. **Inicia el modo desarrollo:**  
   `npm start`
4. **Ejecuta los tests:**  
   `npm test`
5. **Compila para producción:**  
   `npm run build`
6. **Revisa el código (Lint):**  
   `npm run lint`

# ℹ️ Información sobre el ejercició resuelto

**🟢 Node: v20.12.0**  
**⚛️ React: v19.0.0**  
**🧭 React Router: v7.0.0**  
**🧹 Lint: [neostandard](https://github.com/neostandard/neostandard)**  

**📜 Scripts**
- START - Modo desarrollo - `npm run dev`
- BUILD - Compilación para modo Producción - `npm run build`
- TEST - Lanzamiento de test - `npm run test`
  - 'http://localhost:5173' sino modificar playwright.config.js línea 77.
- LINT - Comprobación de código - `npm run lint`
