const Search = ({ data, setData }) => {
  console.log(data)
  const handleChange = (e) => {
    const { value } = e.target
    setData(data.filter((product) => {
      const { brand, model } = product
      return (
        brand.toLowerCase().includes(value.toLowerCase()) ||
        model.toLowerCase().includes(value.toLowerCase())
      )
    }))
  }

  return (
    <input
      onChange={handleChange}
      type='text'
      placeholder='Buscar Producto'
    />
  )
}

export default Search
