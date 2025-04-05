import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import Item from '../components/Item/Item'

import './listView.css'
import Search from '../components/Search/Search'
import { fetchProducts } from '../utils/utils'

// Se podría crear un componente que contenga los items
// y conservar la persistencia en el padre, pasandole la información
// a los hijos mediante props
let DataPersis = []

const URL_API = 'https://itx-frontend-test.onrender.com/api/product'

const ListView = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts(URL_API).then((data) => {
      setProducts(data)
      DataPersis = data
    })
  }, [])

  return (
    <main className='listView'>
      <section className='listView-container-search'>
        <Search data={DataPersis} setData={setProducts} />
      </section>

      <section className='listView-container-item'>
        {products.map(({ brand, imgUrl, model, price, id }) => (
          <NavLink
            key={id + 'link'}
            to={`/product/${model}/${id}`}
          >
            <Item
              key={id}
              brand={brand}
              imgUrl={imgUrl}
              model={model}
              price={price}
            />
          </NavLink>
        ))}
      </section>
    </main>
  )
}

export default ListView
