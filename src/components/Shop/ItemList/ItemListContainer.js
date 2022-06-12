import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useAppContext } from '../../context/AppContext';
import Loader from '../../Loader'; 
import ItemList from './ItemList';

export const ItemListContainer = () => {
	const { products } = useAppContext()

	const [productsCategory, setProductsCategory] = useState([])

	const { categoryId } = useParams()

	

	useEffect(() => {
		!categoryId 
			? setProductsCategory(products) 
			: setProductsCategory(
				products.filter((product) => product.category === categoryId)
				)
	}, [categoryId, products])
  
	
	return (
		<>
			<div className='divider'>Nuestros productos</div>
			<ItemList products={productsCategory}/>
		</>
	)
  
  
}

export default ItemListContainer
{/* { Loader 
				? <Loader/> 
				: <ItemList products={productsCategory}/>
			} */}