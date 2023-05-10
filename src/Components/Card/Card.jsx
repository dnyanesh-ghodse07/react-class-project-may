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
        ratings
    } = props.product;
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Card