import React, { useState } from 'react'

const ItemCount = ({ initial, product }) => {
    
    console.log('Aqui hay un render del componente Contador');
    const [cantidad, setCount] = useState(initial);
   
    const addHandler = () => {      
        if (cantidad < product.stock) {
            setCount(cantidad + 1) 
        }
    }

    
    const restHandler = () => {      
        if (cantidad > initial) {
            setCount(cantidad - 1) 
        }                      
    }
   
   
   return (
    <>
        <div className="d-flex flex-column ">
			<div className="btns-count">
				<button className="btn btn-block" onClick={restHandler}>
					<i className="fas fa-minus"></i>
				</button>
				<label className="alert alert-white cantidad-items">{cantidad}</label>
				<button className="btn btn-block" onClick={addHandler}>
					<i className="fas fa-plus"></i>
				</button>
			</div>

			<div className="agreg-carrito">
				<button
					className="btn bg-primary text-white btn-block "
					onClick={() =>
						alert(`Agregaste ${cantidad} ${product.name} al carrito`)
					}
				>
					Agregar al Carrito
					</button>
				</div>
		</div>
    </>
  )
}

export default ItemCount