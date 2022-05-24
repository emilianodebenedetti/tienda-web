import React from 'react'

const CartList = ( {prod} ) => {
  /* const { name, description, price, img, category, stock,  } = prod */
  return (
    <>
        <li>{prod.name}</li>
        <li>{prod.price}</li>
        <li>{prod.description}</li>
        <img src='{prod.img}'></img> 
        <li>{prod.category}</li>
        <li>{prod.stock}</li>
    </>
    
  )
}
export default CartList