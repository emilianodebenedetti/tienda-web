import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getItem } from '../../../data/ProductoData';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
	const [category, setCategory] = useState()
	
	const { categories } = useParams()

	useEffect(() => {
		if (categories === undefined) {
			getItem().then((resp) => setCategory(resp))
		} else {
			getItem().then((resp) =>
				setCategory(resp.filter((product) => product.category === categories))
			)
		}
	}, [categories])

	return (
		<>
			<div className="divider">Nuestros productos</div>
			<ItemList category={category} />
			
		</>
	)
  
  
}

export default ItemListContainer
