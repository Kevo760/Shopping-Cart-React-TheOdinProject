import React from 'react';
import '../../Styles/ProductPage.css';

function ThavagePage(props) {
    const { products } = props
    const product = products.find(product => product.name === 'Thavage')

  return (
    <div className='product-page'>
        <div className='product-page-box'>
            <img src={product.image} atl='product image'/>
            
            <div className='product-page-info'>
                <h1 className='product-page-name'>{product.name}</h1>
                <span className='product-page-type'>{product.type}</span>
                <span className='product-page-price'>${product.price}</span>
                <span className='product-page-description'>A pre-workout is a supplement that can increase energy levels, improve exercise performance, and stimulate muscle growth. Athletes, particularly runners and weightlifters, use pre-workout supplements before exercises like weightlifting or HIIT (high-intensity interval training)</span>

                <div className='product-page-btns'>
                <button className='cart-btn'>Add to Cart</button>
                <button className='buy-btn'>Buy Now</button>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default ThavagePage