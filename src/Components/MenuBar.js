import React from 'react';
import '../Styles/MenuBar.css';
import { HiOutlineShoppingBag } from 'react-icons/hi'


function MenuBar() {
  return (
    <nav className='menu-bar'>
        <h1 className='site-name'>Enraged</h1>

        <div className='link-section'>
          <p>Home</p>
          <p>Shop</p>
        </div>
        
        <div className='cart-section'>
          <p className='item-amount-icon'>0</p>
          <HiOutlineShoppingBag className='bag-icon'/>
        </div>
    </nav>
  )
}

export default MenuBar