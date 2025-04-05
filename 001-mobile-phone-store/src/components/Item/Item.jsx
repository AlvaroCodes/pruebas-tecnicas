import Image from '../Image/Image'

const Item = ({ brand, imgUrl, model, price }) => {
  return (
    <section>
      <h2>{brand}</h2>
      <Image url={imgUrl} altInfo={model} />
      <h3>{model}</h3>
      <p>Price: {price}</p>
    </section>
  )
}

export default Item
