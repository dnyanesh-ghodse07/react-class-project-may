import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import data from '../../data.json';
import './Cart.scss'


const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartProducts = data.products.filter(product => cartItems[product.id] !== 0);

  console.log(cartProducts);

  const cartTotal = cartProducts.map(product => Number(cartItems[product.id]) * product.price);
  console.log(cartTotal);
  return (
    <div className='cart'>
      <div className="cart-top">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-main">
        <div className="cart-products">
          {
            cartProducts.map(product => {
              return (<>
                <div className="cart-item">
                  <div className="cart-item-img">
                    <img src={product.thumbnail} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{product.brand}</h3>
                    <p>{product.title}</p>
                    <h1>
                      $ {cartItems[product.id] * product.price}
                    </h1>
                  </div>
                  <button className='add-to-cart' onClick={() => addToCart(product.id)}>+</button>
                  <h4>{cartItems[product.id]}</h4>
                  <button className='remove-from-cart' onClick={() => removeFromCart(product.id)}>-</button>
                </div>
              </>)
            })
          }
        </div>
        <div className="cart-summary">
          <h1>Cart Summary</h1>
          <hr />
          {
            cartProducts.map(product => {
              return (
                <div className='summary-item'>
                  <div className='summary-item-detail'>
                    <p>{product.brand}</p>
                    <p>{product.title}</p>
                  </div>
                  <div>
                    {cartItems[product.id]}
                  </div>
                  <div className='summary-item-price'>
                    $ {product.price}
                  </div>
                </div>
              )
            })}
          <div className="cart-total">
            Total : $ {cartTotal?.reduce((total, curr) => total + curr, 0)}
            <div className="checkout">
              <button>Proceed to checkout</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart