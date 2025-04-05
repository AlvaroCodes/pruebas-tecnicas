const Description = ({ data }) => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displaySize,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight
  } = data

  return (
    <section>
      <h2>{brand} {model}</h2>
      <div className='description-container'>
        <p><strong>Precio:</strong> {price}</p>
        <p><strong>CPU:</strong> {cpu}</p>
        <p><strong>RAM:</strong> {ram}</p>
        <p><strong>Sistema Operativo:</strong> {os}</p>
        <p><strong>Tamaño de Pantalla:</strong> {displaySize}</p>
        <p><strong>Batería:</strong> {battery}</p>
        <p><strong>Cámara Principal:</strong> {primaryCamera}</p>
        <p><strong>Cámara Secundaria:</strong> {secondaryCmera}</p>
        <p><strong>Dimensiones:</strong> {dimentions}</p>
        <p><strong>Peso:</strong> {weight}</p>
      </div>
    </section>
  )
}

export default Description
