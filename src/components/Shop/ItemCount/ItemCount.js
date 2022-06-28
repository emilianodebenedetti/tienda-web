import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { useCartContext } from '../../context/CartContext';

export const ItemCount = ({ initial, product, stock, onAdd, id }) => {
    
    const [cantidad, setCantidad] = useState(initial);
   
	const { addToCart } = useCartContext()
	const { products } = useAppContext()

    const addHandler = () => {      
        if (cantidad < stock) {
            setCantidad(cantidad + 1) 
        }
    }

    const restHandler = () => {      
        if (cantidad > initial) {
            setCantidad(cantidad - 1) 
        }                      
    }


	const handleClick = (id, cantidad) => {
		const findProduct = products.find((product) => product.id === id)
		
		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}
		
		addToCart(findProduct, cantidad)
		onAdd(cantidad)
	
	}
   
   
   return (
    <>
        <div className="d-flex flex-column">
			<div className="btns-count w-10 md:w-12 lg:w-14 py-2 m-auto flex flex-column justify-center">
				
				<button className="btn btn-block" onClick={restHandler}>
					<i className="fas fa-minus">-</i>
				</button>
				
				<label className="w-40 alert alert-white justify-center">{cantidad}</label>
				
				<button className="btn btn-block" onClick={addHandler}>
					<i className="fas fa-plus">+</i>
				</button>
				
				
			</div>

			<div className="">
				<button
					className="btn bg-orange text-white btn-block "
					onClick={() => handleClick(product.id, cantidad)}
				>
					Agregar al Carro
				</button>
			</div>
		</div> 
    </>
  )
}

export default ItemCount