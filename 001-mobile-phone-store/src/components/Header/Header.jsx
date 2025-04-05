import { NavLink, Link, useLocation } from 'react-router'
import LOGO from '../../assets/react.svg'

import './header.css'
import ShoppingCartIcon from '../../assets/icons/ShoppingCartIcon'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCart'

/*
Crearía otro archivo Breadcrumbs.jsx añadiendo este componente,
pero como en la lista de componentes de la tarea no lo inlcuye, no lo añado.
*/
const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  // No mostrarlo en index
  if (pathnames.length === 0) return null

  pathnames.forEach((pathname, index) => {
    pathnames[index] = pathname.replace(/%20/g, ' ')
  })

  // Se elimina el id, otra forma de hacerlo sería usando react context
  // y haciendo un filtrado de los datos.
  if (pathnames.length === 3) {
    pathnames.pop()
  }

  return (
    <nav aria-label='breadcrumb' className='breadcrumbs'>
      <ol style={{ listStyle: 'none', display: 'flex' }}>
        <li>
          <Link to='/'>Inicio</Link>
          {pathnames.length > 0 && ' / '}
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          return (
            <li key={to}>
              {isLast
                ? (
                  <span>{value}</span>
                  )
                : (
                  <>
                    <Link to={to}>{value}</Link>
                    {' / '}
                  </>
                  )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

const Header = () => {
  const { cart } = useContext(ShoppingCartContext)

  return (
    <header className='header'>
      <div className='header-nav-content'>
        <NavLink to='/' className='header-logo-link'>
          <img src={LOGO} alt='logo' />
        </NavLink>
        <h1>
          Header
        </h1>

        <Breadcrumbs />
      </div>

      <section className='header-cart'>
        <ShoppingCartIcon />
        <span className='header-cart-count'>
          {cart.length}
        </span>
      </section>
    </header>
  )
}

export default Header
