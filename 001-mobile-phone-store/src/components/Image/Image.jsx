import React from 'react'

const Image = ({ url, altInfo }) => {
  return (
    <img src={url} alt={altInfo} />
  )
}

export default Image
