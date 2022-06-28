import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';




export const ItemDetail = ({ product, terminar, onAdd }) => {
	console.log(product)
	console.log(terminar) 
	console.log(onAdd)

  return (
        <>
			<div className="bg-cream text-black">
				<div className="hero-content flex-row lg:flex-row md:flex-row card ">
					<img src={product.img} className="lg:w-96 md:w-80 w-56  rounded-lg shadow-2xl" alt={`${product.category}`}/>
					<div>
						<h2 className="text-3xl lg:text-5xl font-bold pl-6">{product.name}</h2>
						<p className="py-1 md:py-6 pl-6">'{product.description}'</p>
						<div className="inline-block align-bottom ">
							<span className="text-2xl lg:text-3xl leading-none align-baseline pl-6">
								US$ {product.price}
							</span>
							{terminar ? (
								<>
									<Link
										to="/cart"
										className="btn bg-orange text-white btn-block"
										>
										Terminar Compra
									</Link>
								</>	
							) : (
								<ItemCount product={product} stock={product.stock} onAdd={onAdd} id={product.id} initial={1}/>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
  )
}

export default ItemDetail


