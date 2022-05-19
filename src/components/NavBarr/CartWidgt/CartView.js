import React from 'react'
import Cart from './Cart'

const CartView = ( {prod} ) => {
  return (
    <>
        <div className="divider">Tu carrito de compras</div>
        <Cart/>
       
    </>
  )
}

export default CartView