
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem, ProductoData } from '../../../data/ProductoData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
    const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		if (id === undefined) {
			getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => setProduct(resp[id]))
		}
	}, [id])

	//console.log(product)

    return (
	<>
		<div className="container mt-2">
			<ItemDetail producto={product} />
		</div>
	</>	
  )
}

export default ItemDetailContainer