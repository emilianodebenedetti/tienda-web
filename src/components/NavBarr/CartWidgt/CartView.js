import React from 'react'
import Cart from './Cart'
import CartWidget from './CartWidget'

const CartView = ( {prod} ) => {
  return (
    <>
      <div className="divider">Tu carrito de compras</div>
      <CartWidget/>
      <Cart/>
       
    </>
  )
}

export default CartView