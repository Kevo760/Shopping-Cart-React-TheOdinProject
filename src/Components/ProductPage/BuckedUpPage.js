import React from 'react';
import '../../Styles/ProductPage.css';

function BuckedUpPage(props) {
    const { products } = props
    const product = products.find(product => product.name === 'Bucked Up')

  return (
    <div className='product-page'>
        <div className='product-page-box'>
            <img src={product.image} atl='product image'/>
            
            <div className='product-page-info'>
                <h1 className='product-page-name'>{product.name}</h1>
                <span className='product-page-price'>${product.price}</span>

                <div className='product-page-btns'>
                <button className='cart-btn'>Add to Cart</button>
                <button className='buy-btn'>Buy Now</button>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default BuckedUpPage