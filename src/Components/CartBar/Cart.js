import React from 'react';
import '../../Styles/Cart.css';
import { GrFormClose } from 'react-icons/gr';
import CartProduct from './CartProduct';

function Cart(props) {
  const { showCartToggle, cart, addQuantity, subtractQuantity } = props

  const cartproduct = cart.map(product => <CartProduct product={product} key={product.id} addQuantity={addQuantity} subtractQuantity={subtractQuantity}/>)

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
            
            <div className='cart-bottom'>
              <h3 className='cart-total'>SUBTOTAL: $</h3>
              <button className='checkout-btn'>Checkout</button>
            </div>
            
        </div>
    </div>
  )
}

export default Cart