import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useAppContext } from '../../context/AppContext';
import ItemList from './ItemList';

export const ItemListContainer = () => {
	const { products } = useAppContext()

	const [productsCategory, setProductsCategory] = useState([])

	const { categoryId } = useParams()

	useEffect(() => {
		!categoryId 
			? setProductsCategory(products) 
			: setProductsCategory(
				products.filter((product) => product.categoria === categoryId)
				)
	}, [categoryId, products])
  
	
	return (
		<>			
			
			<ItemList products={productsCategory} category={categoryId}/>   			
		</>
	)
  
  
}

export default ItemListContainer
