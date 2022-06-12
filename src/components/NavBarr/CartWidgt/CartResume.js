import React from 'react'

export const CartResume = ({ product }) => {
  return (
    <>
        <div className='text-end text-center'>
            <h4>$ {product.price * product.quantity}</h4>
            <hr />
        </div>
    </>
  )
}

export default CartResume