import React, { useEffect } from 'react';
import '../../Styles/Cart.css';
import { GrFormClose } from 'react-icons/gr';
import CartProduct from './CartProduct';

function Cart(props) {
  const { showCartToggle, cart, addQuantity, subtractQuantity, removeProduct, cartTotalPrice, calculateCartTotal } = props

  const cartproduct = cart.map(product => <CartProduct product={product} key={product.id} addQuantity={addQuantity} subtractQuantity={subtractQuantity} removeProduct={removeProduct}/>)

  // When cart is refreshed calculate cart total
  useEffect(() =>{
    calculateCartTotal()
  })

  return (
    <div className='cart'>
        <div className='cart-bar'>
            <GrFormClose className='close-icon' onClick={showCartToggle}/>
            <div className='cart-box'>
              <h1 className='cart-header'>SHOPPING CART</h1>
                <div className='cart-table'>
                  <span className='table-product'>Product</span>
                  <span className='table-total'>Total</span>
                </div>
            </div>

            <div className='cart-product-section'>
              {cartproduct}
            </div>

            {/* if cart is empty show cart empty div else show cart with total and checkout button */}
            { 
              cart.length === 0 
              ?
              <div className='cart-bottom'>
                <h3 className='cart-empty'>Your cart is empty.</h3>
              </div>
              :
              <div className='cart-bottom'>
                <h3 className='cart-total'>SUBTOTAL: ${cartTotalPrice}</h3>
                <button className='checkout-btn'>Checkout</button>
            </div>
            }
       
        </div>
    </div>
  )
}

export default Cart