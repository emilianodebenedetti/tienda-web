import React from 'react'

const CartList = ( {prod} ) => {
  return (
    <>
        <li>{prod.name}</li>
        <li>{prod.price}</li>
    </>
    
  )
}

export default CartList