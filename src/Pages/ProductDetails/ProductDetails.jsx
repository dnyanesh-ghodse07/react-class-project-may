import React, {useContext} from 'react'
import "./ProductDetails.scss"
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import {ShopContext} from '../../context/shopContext';

const ProductDetails = () => {
  const {addToCart,removeFromCart,cartItems} = useContext(ShopContext);
  const {id} = useParams();
  const product = data.products.filter(p => p.id == id);
  const {images,brand,price,title,category,discountPercentage,description} = product[0];
  console.log(cartItems);
  return (
    <div className='product-details-container'>

      <div className="product-details">
        <div className="left">
          <img src={images[0]} alt="" />
        </div>
        <div className="right">
          <div className="top">
            <h1>{brand}</h1>
            <p>{title}</p>
            <span className='desc'>{description}</span>
          </div>
          <div className="price-details">
            <div className="price">
                <h1>$ {price}</h1>
                <p>Discount: {discountPercentage} %</p>
            </div>
          </div>
          <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
      </div>
      

    </div>
  )
}

export default ProductDetails