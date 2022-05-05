
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../../data/ProductoData'

import ItemDetail from './ItemDetail'





const ItemDetailContainer = () => {
  
    const [producto, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		if (id === undefined) {
			getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => setProduct(resp[id]))
		}
	}, [id])

	console.log(producto)

    return (
    <div className="container mt-2">
		<ItemDetail producto={producto} />
	</div>
  )
}

export default ItemDetailContainer