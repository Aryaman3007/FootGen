import React from 'react'
import "./bestSeller.css"
import Card from '../Card/Card'
import { useState } from 'react'
import { products } from '../../data'

const BestSeller = () => {

    const [buttons, setButtons] = useState([
        { id: 1, name: 'All', clicked: true },
        { id: 2, name: 'Nike', clicked: false },
        { id: 3, name: 'Adidas', clicked: false },
        { id: 4, name: 'Puma', clicked: false },
        { id: 5, name: 'Bata', clicked: false },
    ]);
    const [prevClickedId, setPrevClickedId] = useState(null);

    const handleClick = (id) => {
        setButtons((prevButtons) =>
            prevButtons.map((button) => {
                if (button.id === 1) {
                    return { ...button, clicked: false };
                } else if (button.id === id) {
                    return { ...button, clicked: true };
                } else if (button.id === prevClickedId) {
                    return { ...button, clicked: false };
                }
                return button;
            })
        );
        setPrevClickedId(id);
    };

    return (
        <div className='bs' id="shop">
            <p className="bs-title">Bestseller Products</p>
            <div className="brands">
                {buttons.map((button) => (
                    <button className='shoe-brand'
                        key={button.id}
                        style={{
                            backgroundColor: button.clicked ? '#e31e0cca' : 'white',
                            color: button.clicked ? 'white' : 'black',
                            transition: 'background-color 0.2s ease-in',
                        }}
                        onClick={() => handleClick(button.id)}
                    > {button.name}
                    </button>))}
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Card key={item.id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default BestSeller