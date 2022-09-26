import React from 'react';
import '../../Styles/CartProduct.css';
import ProductAmountBtn from './ProductAmountBtn';
import {GrFormClose} from 'react-icons/gr';


function CartProduct(props) {
    const { product, addQuantity, subtractQuantity, removeProduct } = props
    const productTotal = (product.price * product.quantity).toFixed(2)

  return (
    <div className='cart-product'>
        <div className='cart-product-img'>
            <img src={product.image} alt='product'></img>
        </div>

        <div className='cart-product-detail'>
            <span className='cart-product-name'>{product.name}</span>
            <span className='cart-product-type'>{product.type}</span>
            <span className='cart-product-price'>{product.price}</span>
            <ProductAmountBtn product={product} addQuantity={addQuantity} subtractQuantity={subtractQuantity}/>
            <div className='cart-product-remove' onClick={() => removeProduct(product)}>Remove <GrFormClose className='cart-product-remove-icon'/></div>
        </div>

        <div className='cart-product-total'>
            <span>${productTotal}</span>
        </div>
    </div>
  )
}

export default CartProduct