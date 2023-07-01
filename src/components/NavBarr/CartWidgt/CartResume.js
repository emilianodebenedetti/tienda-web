import React from 'react'

export const CartResume = ({ product }) => {
  return (
    <>
        <div className='text-center'>
            <h4>{product.nombre} : $ {product.precio}</h4>
            <hr />
        </div>
    </>
  )
}

export default CartResume