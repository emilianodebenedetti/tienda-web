import React from 'react'

export const CartResume = ({ product }) => {
  return (
    <>
        <div className='text-center'>
            <h4>{product.nombre} X {product.quantity} : $ {product.precio * product.quantity}</h4>
            <hr />
        </div>
    </>
  )
}

export default CartResume