import React from 'react';
import '../Styles/MenuBar.css';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom';


function MenuBar(props) {
  const { showCartToggle, cartQuantity } = props

  return (
    <nav className='menu-bar'>
      <Link to='/' className='site-name'><h1 >ENRAGED</h1></Link>
        
        <div className='menu-flex-section'>
          <div className='link-section'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/shop' className='link'>Shop</Link>
          </div>
        
          <div className='cart-section'>
            { cartQuantity > 0 ?
              <p className='item-amount-icon'>{cartQuantity}</p>
              :
              null
            }
            <HiOutlineShoppingBag className='bag-icon' onClick={showCartToggle}/>
         </div>
        </div>
        
    </nav>
  )
}

export default MenuBar