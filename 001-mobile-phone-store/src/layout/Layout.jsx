import { Outlet } from 'react-router'
import Header from '../components/Header/Header'

import './layout.css'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
