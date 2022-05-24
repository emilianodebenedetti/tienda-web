import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getItem } from '../../../data/ProductoData';
import Loader from '../../Loader';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
	const [category, setCategory] = useState()
	const { categories } = useParams()
	const[loader, setLoader] = useState(true)

	useEffect(() => {
		if (categories === undefined) {
			getItem().then((resp) => setCategory(resp))
		} else {
			getItem().then((resp) =>
				setCategory(resp.filter((product) => product.category === categories))
			)
		}
	}, [categories])

	useEffect(() => {
	  setTimeout(() => {
		  setLoader(false)
	  }, 2000)
	
	}, [])
	

	return (
		<>
			<div className='divider'>Nuestros productos</div>
			{ loader ? <Loader/> : <ItemList category={category}/>}
			
		</>
	)
  
  
}

export default ItemListContainer
