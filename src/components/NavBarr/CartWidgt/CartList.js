import React from 'react'


export default function CartList( { product } ) {
  
  return (
    <>
      <div className='px-10 pt-5'>
        <div className="alert shadow-lg bg-cream text-black">
          <div>
             <img src={product.img} className='stroke-info flex-shrink-0 w-10 h-auto'></img>  
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <div className="text-xs">Cantidad: {product.quantity}</div>
            </div>
          </div>
          <div className="flex-none">
            <span> US$ {product.price * product.quantity} </span>
          </div>
        </div>
      </div>

    </>
    
  )
}
