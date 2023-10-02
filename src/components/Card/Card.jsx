import React from 'react'
import "./card.css"

const Card = ({image,name,price}) => {
  return (
    <div className="c">
        <img src={image} alt={name} className="c-img" />
        <div className="c-desc">
            <h2 className="c-title">{name}</h2>
            <p className="price">{price}</p>
        </div>
        <button className="add-to-cart-btn">ADD TO CART</button>
    </div>
  )
}

export default Card