import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { useCartContext } from '../../context/CartContext';

export const ItemCount = ({ initial, product, stock, onAdd, id, selectedTalle }) => {

	const { cart, deleteCart, setSelectedTalle } = useCartContext();
	const [cantidad, setCantidad] = useState(initial);
	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	/*     const addHandler = () => {      
			if (cantidad < stock) {
				setCantidad(cantidad + 1)
			}
		}
	
		const restHandler = () => {      
			if (cantidad > initial) {
				setCantidad(cantidad - 1) 
			}                      
		}
	 */

	const handleClick = (id, cantidad) => {
		const findProduct = products.find((product) => product.id === id)
		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}
		addToCart(findProduct, cantidad, selectedTalle)
		onAdd(cantidad)
	}


	return (
		<>
			<div className="d-flex flex-column">
				<div className="btns-count gap-1 w-10 md:w-12 lg:w-14 py-2 m-auto flex flex-column justify-center"></div>

				{/*<h3>
              {product.talle &&
                product.talle.map((talle, index) => (
                  <button
                    key={index}
                    className={`btn btn-outline rounded  ${selectedTalle === talle ? 'selected bg-greyBtn' : ''}`}
                    onClick={() => handleTalleSelection(talle)}
                  >
                    {talle}
                  </button>
                ))}
            </h3>*/}


				<button
					className="static bottom-0 mb-0 btn bg-greyBtn text-white btn-block rounded"
					onClick={() => handleClick(product.id, cantidad)}
				>
					Agregar al Carro
				</button>

			</div>
		</>
	)
}

export default ItemCount