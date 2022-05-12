import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { useCartContext } from '../../context/CartContext';

const ItemCount = ({ stock, onAdd, id }) => {
    
    console.log('Aqui hay un render del componente Contador');
    const [cantidad, setCount] = useState(0);
   
	const { addToCart } = useCartContext()
	const { products } = useAppContext()

    const addHandler = () => {      
        if (cantidad < stock) {
            setCount(cantidad + 1) 
        }
    }
    const restHandler = () => {      
        if (cantidad > 0) {
            setCount(cantidad - 1) 
        }                      
    }
	const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)
		
		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}
		
		addToCart(findProduct, cantidad)
		onAdd(cantidad)
	
	}
   
   
   return (
    <>
        <div className="d-flex flex-column ">
			<div className="btns-count">
				<button className="btn btn-block" onClick={restHandler}>
					<i className="fas fa-minus">-</i>
				</button>
				<label className="alert alert-white cantidad-items justify-center">{cantidad}</label>
				<button className="btn btn-block" onClick={addHandler}>
					<i className="fas fa-plus">+</i>
				</button>
			</div>

			<div className="agreg-carrito">
				<button
					className="btn bg-primary text-white btn-block "
					onClick={() => handleClick(id, cantidad)}
				>
					Agregar al Carro
					</button>
				</div>
		</div> 
    </>
  )
}

export default ItemCount