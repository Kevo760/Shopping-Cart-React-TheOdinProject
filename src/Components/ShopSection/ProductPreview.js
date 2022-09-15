import React from 'react';
import '../../Styles/ProductPreview.css';


function ProductPreview(props) {
    const { product } = props

  return (
    <div className='product-preview'>
        <img src={product.image} alt='product image' />
        <span className='preview-name'>{product.name}</span>
        <span className='preview-type'>{product.type}</span>
        <span className='preview-price'>${product.price}</span>
    </div>
  )
}

export default ProductPreview