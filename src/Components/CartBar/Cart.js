import React from 'react';
import '../../Styles/Cart.css';
import { GrFormClose } from 'react-icons/gr';

function Cart(props) {
  const { showCartToggle } = props
  return (
    <div className='cart'>
        <div className='cart-bar'>
            <GrFormClose className='close-icon' onClick={showCartToggle}/>
        </div>
    </div>
  )
}

export default Cart