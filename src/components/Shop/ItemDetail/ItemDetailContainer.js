import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { getItem } from '../../firebase/firebaseService'
import  ItemDetail  from './ItemDetail'
import React from 'react'

export const ItemDetailContainer = () => {
  
    const { products } = useAppContext()
	const [ productSelected, setProductSelected ] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getItem(id).then((item) => 
			setProductSelected({ ...item.data(), id: item.id })
		)
	}, [id, products])

	const [terminar, setTerminar] = useState(false)
	const onAdd = () => {
		setTerminar(true)
	}

    return (
	<>
		<div className="mt-4 py-auto">
			<div className='divider py-auto'>Detalle del producto</div>
			<ItemDetail product={productSelected} onAdd={onAdd} terminar={terminar} /> 
		</div>
	</>	
  )
}

export default ItemDetailContainer