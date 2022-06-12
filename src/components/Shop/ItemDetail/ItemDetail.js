import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';




export const ItemDetail = ({ product, terminar, onAdd }) => {
	console.log(product)
	console.log(terminar) 
	console.log(onAdd)

  return (
        <>
			<div className="px-0 hero bg-base-300 ">
				<div className="hero-content flex-col lg:flex-row card w-100">
					<img src={product.img} className="max-w-sm rounded-lg shadow-2xl" alt={`${product.category}`}/>
					<div>
						<h1 className="text-3xl font-bold">{product.category}</h1>
						<h2 className="text-5xl font-bold">{product.name}</h2>
						<p className="py-6">{product.description}</p>
						<div className="inline-block align-bottom mr-5">
							<span className=" text-5xl leading-none align-baseline">
								US$ {product.price}
							</span>
							{terminar ? (
								<>
									<Link
										to="/cart"
										className="btn bg-primary text-white btn-block "
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


