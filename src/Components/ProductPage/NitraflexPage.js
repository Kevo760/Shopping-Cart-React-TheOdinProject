import React from 'react';
import '../../Styles/ProductPage.css';


function NitraflexPage(props) {
    const { products, addToCart } = props
    const product = products.find(product => product.name === 'Nitraflex')

  return (
    <div className='product-page'>
        <div className='product-page-box'>
            <img src={product.image} alt='product'/>
            
            <div className='product-page-info'>
                <h1 className='product-page-name'>{product.name}</h1>
                <span className='product-page-type'>{product.type}</span>
                <span className='product-page-price'>${product.price}</span>
                <span className='product-page-description'>A pre-workout is a supplement that can increase energy levels, improve exercise performance, and stimulate muscle growth. Athletes, particularly runners and weightlifters, use pre-workout supplements before exercises like weightlifting or HIIT (high-intensity interval training)</span>

                <div className='product-page-btns'>
                <button className='cart-btn' onClick={() => addToCart(product)}>Add to Cart</button>
                <button className='buy-btn' onClick={() => addToCart(product)}>Buy Now</button>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default NitraflexPage