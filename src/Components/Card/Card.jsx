import React from 'react' 
import "./Card.scss"

const Card = (props) => {
    const {
        id,
        title,
        brand,
        category,
        price,
        rating,
        images,
        thumbnail
    } = props.product;
  return (
    <div className='card'>
        <div className="img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="detail">
          <h3 className='brand'>{brand.length > 20 ? brand.substring(0,20)+'...' : brand}</h3>
          <span className='title'> {title.length > 20 ? title.substring(0,20)+'...' : title}</span>
          <p className='price'>$ {price}</p>
          {/* <span className='rating'>*{rating}</span> */}
        </div>
    </div>
  )
}

export default Card