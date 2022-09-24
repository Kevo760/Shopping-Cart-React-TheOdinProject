import React, { useEffect, useState } from 'react';
import '../../Styles/ProductAmountBtn.css';

function ProductAmountBtn(props) {
    const { product, addQuantity, subtractQuantity } = props
    // const productAmount = product.quantity
    const productAmount = product.quantity
    const [ disableBtn, setDisableBtn ] = useState(true)

    // If product amount is more than one set disableBtn to true else set to false 
    const checkToDisableBtn = () => {
      if(productAmount > 1) {
        setDisableBtn(false)
      } else {
        setDisableBtn(true)
      }
    } 

  

    
    useEffect(() => {
      checkToDisableBtn()
    })

  return (
    <div className='productAmountBtn'>
        <button disabled={disableBtn} onClick={() => subtractQuantity(product)}>-</button>
        <span className='productAmountBtn-quantity'>{productAmount}</span>
        <button onClick={() => addQuantity(product)}>+</button>
    </div>
  )
}

export default ProductAmountBtn