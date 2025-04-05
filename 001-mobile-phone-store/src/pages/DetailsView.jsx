import { useParams } from 'react-router'

import Description from '../components/Description/Description'
import Image from '../components/Image/Image'
import { useContext, useEffect, useState } from 'react'
import { fetchProducts } from '../utils/utils'

import './detailsView.css'
import { ShoppingCartContext } from '../context/ShoppingCart'

const URL_API = 'https://itx-frontend-test.onrender.com/api/product/'
const URL_API_CART = 'https://itx-frontend-test.onrender.com/api/cart'

// Se debería crear un nuevo jsx con este componente, pero como no se definio
// en la tarea no se modulariza
const ProductActions = ({ options }) => {
  const { cart, addItem } = useContext(ShoppingCartContext)
  const { id, brand, price, model, imgUrl } = options
  const { colors, storages } = options.options

  const handleAddItem = (e) => {
    e.preventDefault()

    const storageCode = e.target.querySelector('#storage').value
    const colorCode = e.target.querySelector('#color').value

    const item = {
      id,
      colorCode,
      storageCode
    }

    console.log('item', item)

    fetch(URL_API_CART, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // ver si existe ya y añadir +1
          let exists = false

          cart.forEach((item) => {
            if (item.id === data.id &&
              item.colorCode === data.colorCode &&
              item.storageCode === data.storageCode
            ) {
              item.count += 1
              exists = true
            }
          })

          if (!exists) {
            addItem({
              brand,
              model,
              imgUrl,
              price,
              id,
              colorCode,
              storageCode,
              count: 1
            })
          }

          alert('Producto añadido al carrito')
        })
      } else {
        alert('Error al añadir el producto al carrito')
      }
    })
  }

  return (
    <form
      onSubmit={handleAddItem}
      className='productActions'
    >
      <select id='color' name='color'>
        {colors.map(({ name, code }) => (
          <option key={name + code} value={code}>{name}</option>
        ))}
      </select>

      <select id='storage' name='storage'>
        {storages.map(({ name, code }) => (
          <option key={name + code} value={code}>{name}</option>
        ))}
      </select>

      <button type='submit' className='productActions-button'>Agregar al carrito</button>
    </form>
  )
}

const DetailsView = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(false)

  useEffect(() => {
    fetchProducts(`${URL_API}${id}`).then((data) => {
      setProduct(data)
    })
  }, [])

  return (
    <main className='detailsView'>
      <Image url={product.imgUrl} altInfo={product.model} />

      <section>
        <Description data={product} />
        {
          product && (<ProductActions options={product} />)
        }

      </section>
    </main>
  )
}

export default DetailsView
