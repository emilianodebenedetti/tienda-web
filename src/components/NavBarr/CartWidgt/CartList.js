import React from 'react'


export default function CartList( { product } ) {
  
  return (
    <>
      <div className='container'>
        <div className="alert shadow-lg">
          <div>
             <img src={product.img} className='stroke-info flex-shrink-0 w-10 h-auto'></img>  
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <div className="text-xs">Disponibles: {product.stock}</div>
            </div>
          </div>
          <div className="flex-none">
            <span> US$ {product.price} </span>
          </div>
        </div>
      </div>

    </>
    
  )
}
