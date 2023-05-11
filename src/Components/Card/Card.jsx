import React from 'react' 
import "./Card.scss"

const Card = (props) => {
    const {
        id,
        name,
        model,
        category,
        price,
        color,
        ratings,
        image
    } = props.product;
  return (
    <div className='card'>
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="detail">
          <h3 className='title'>{name}</h3>
          <p className='model'>{model}</p>
        </div>
    </div>
  )
}

export default Card