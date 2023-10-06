import React from 'react'
import "./main.css"
import C1 from "../../images/collection-1.jpg"
import C2 from "../../images/collection-2.jpg"
import C3 from "../../images/collection-3.jpg"

const main = () => {
  return (
    <div className="m" id="products">
      <div class="hero">
        <div class="container">

          <div class="hero-title">
            New Summer <strong>Shoes Collection</strong>
          </div>

          <p class="hero-text">
            Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage
            existing an expanded array of leadership.
          </p>

          <button class="shop">
            <p className='shop-now'>
              Shop Now
            </p>
            <ion-icon style={{color: "white"}} name="arrow-forward-outline" aria-hidden="true"/>
          </button>

        </div>
      </div>
      <div className="collections">
        <div className="collection-card" style={{backgroundImage: `url(${C1})`}}>
          <h2 className="card-title">
            MEN COLLECTION
          </h2>
          <button className="explore">
            Explore All 
          </button>

        </div> 
        <div className="collection-card" style={{backgroundImage: `url(${C2})`}}>
          <h2 className="card-title">
            WOMEN COLLECTION
          </h2>
          <button className="explore">
            Explore All 
          </button>
          
        </div>   
        <div className="collection-card" style={{backgroundImage: `url(${C3})`}}>
          <h2 className="card-title">
            SPORTS COLLECTION
          </h2>
          <button className="explore">
            Explore All 
          </button>
          
        </div>           
      </div>
    </div>
  )
}

export default main