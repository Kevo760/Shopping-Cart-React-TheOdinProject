import React from 'react';
import '../../Styles/Cart.css';
import { GrFormClose } from 'react-icons/gr';

function Cart() {
  return (
    <div className='cart'>
        <div className='cart-bar'>
            <GrFormClose className='close-icon' />
        </div>
    </div>
  )
}

export default Cart