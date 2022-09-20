import React from 'react';
import '../Styles/MenuBar.css';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom';


function MenuBar() {
  return (
    <nav className='menu-bar'>
        <h1 className='site-name'>ENRAGED</h1>

        <div className='link-section'>
          <Link to='/' className='link'>Home</Link>
          <Link to='/shop' className='link'>Shop</Link>
        </div>
        
        <div className='cart-section'>
          <p className='item-amount-icon'>0</p>
          <HiOutlineShoppingBag className='bag-icon'/>
        </div>
    </nav>
  )
}

export default MenuBar