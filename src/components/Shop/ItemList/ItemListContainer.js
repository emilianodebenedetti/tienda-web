import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useAppContext } from '../../context/AppContext';
import ItemList from './ItemList';

export const ItemListContainer = ({ filteredProducts }) => {
	const { products } = useAppContext()
	const [productsCategory, setProductsCategory] = useState([])
	const { categoryId } = useParams()
	const [busqueda, setBusqueda] = useState('')

	useEffect(() => {
		const productsToUse = filteredProducts.length > 0 ? filteredProducts : products;
		console.log(productsToUse)
		!categoryId 
			? setProductsCategory(productsToUse) 
			: setProductsCategory(
				productsToUse.filter((product) => 
					product.categoria === categoryId &&
					product.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase())
				)
			)
	}, [categoryId, products, filteredProducts])

	return (
		<>
			<ItemList products={productsCategory} category={categoryId} filteredProducts={filteredProducts}/>   			
		</>
	)
}

export default ItemListContainer
