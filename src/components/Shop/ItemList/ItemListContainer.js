import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useAppContext } from '../../context/AppContext';
import ItemList from './ItemList';

export const ItemListContainer = ({ filteredProducts }) => {
	const { products } = useAppContext()
	const [productsCategory, setProductsCategory] = useState([])
	const { categoryId } = useParams()
	const [busqueda, setBusqueda] = useState('')

	const totalProducts = products.length;

	useEffect(() => {
		const productsToUse = filteredProducts.length > 0 ? filteredProducts : products;
	
		const filtered = productsToUse.filter((product) => 
		  (!categoryId || product.categoria === categoryId) && // filtro x categoría solo si hay categoría
		  product.nombre.toLowerCase().includes(busqueda.toLowerCase())
		);
		setProductsCategory(filtered);
	}, [categoryId, products, filteredProducts, busqueda]);

	return (
		<>
			<ItemList 
				products={productsCategory} 
				category={categoryId} 
				totalProducts={totalProducts}
				setBusqueda={busqueda}
				filteredProducts={filteredProducts}
			/>
		</>
	)
}

export default ItemListContainer
