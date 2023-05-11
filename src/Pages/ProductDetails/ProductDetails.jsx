import React from 'react'
import "./ProductDetails.scss"
import { useParams } from 'react-router-dom'
import { products } from '../../data'

const ProductDetails = () => {
  const {id} = useParams();
  const product = products.filter(p => p.id == id);
  console.log(product);
  return (
    <div>
      <h1>{product[0].name}</h1>

    </div>
  )
}

export default ProductDetails