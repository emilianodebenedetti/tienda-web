import React from 'react'


export default function CartList( { product } ) {
  
  return (
    <>
      <div className='mx-28 pt-5'>
        <div className="alert shadow-lg bg-white text-black w-160 h-180"        >
          <div>
            <img src={product.imagen[0]} className='stroke-info flex-shrink-0 w-10 h-auto rounded'></img>  {/* {product.img} */}
            <div>
              <h3 className="font-bold">{product.nombre}</h3>{/* {product.name} */}
              <div className="text-xs">Talle: {product.selectedTalle}</div>
            </div>
          </div>
          <div className="flex-none">
            <span> $ {product.precio} </span>
          </div>
        </div>
      </div>

    </>
  )
}