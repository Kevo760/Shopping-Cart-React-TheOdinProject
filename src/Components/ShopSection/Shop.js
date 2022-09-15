import React from 'react';
import '../../Styles/Shop.css';
import ProductPreview from './ProductPreview';


function Shop(props) {
  const { products } = props

  const product = products.map(product => <ProductPreview product={product} key={product.id}/>)
  return (
    <div className='shop-page'>
      <div className='shop-banner'>
        <h1>PRODUCTS</h1>
      </div>

      <div className='products-section'>
        {product}
      </div>
    </div>
  )
}

export default Shop