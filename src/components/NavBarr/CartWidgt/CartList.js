import React from 'react'


export default function CartList( { product } ) {
  
  return (
    <>
      <div className='mx-28 pt-5'>
        <div className="alert shadow-lg bg-white text-black">
          <div>
             <img src={product.imagen} className='stroke-info flex-shrink-0 w-10 h-auto rounded'></img>  {/* {product.img} */}
            <div>
              <h3 className="font-bold">{product.nombre}</h3>{/* {product.name} */}
              <div className="text-xs">Cantidad: {product.quantity}</div>
            </div>
          </div>
          <div className="flex-none">
            <span> $ {product.precio * product.quantity} </span>
          </div>
        </div>
      </div>

    </>
    
  )
}
