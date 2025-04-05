import { createBrowserRouter } from 'react-router'
import DetailsView from '../pages/DetailsView'
import ListView from '../pages/ListView'
import Layout from '../layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <div>Not Found</div>,
    children: [
      { index: true, Component: ListView },
      { path: 'product', Component: ListView },
      { path: 'product/:name/:id', Component: DetailsView }
    ]
  }
])
