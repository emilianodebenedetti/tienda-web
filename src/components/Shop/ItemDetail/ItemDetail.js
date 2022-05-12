import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductoData } from '../../../data/ProductoData';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ producto }) => {
	const { name, description, price, img, category, stock, id } = producto

	const [terminar, setTerminar] = useState(false); 

	const onAdd = (contador) => {
		setTerminar(true)
		console.log(contador)
	}

  return (
        <>
			 <div className="hero bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={`${category}`}/>
					<div>
						<h1 className="text-3xl font-bold">{category}</h1>
						<h2 className="text-5xl font-bold">{name}</h2>
						<p className="py-6">{description}</p>
						<div className="inline-block align-bottom mr-5">
							<span className="font-bold text-5xl leading-none align-baseline">
								{price}
							</span>
							{terminar ? (
								<Link
									to="/cart"
									className="btn bg-primary text-white btn-block "
								>
									Terminar Compra
								</Link>
							) : (
								<ItemCount stock={stock} onAdd={onAdd} id={id} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
  )
}

export default ItemDetail



/* <div className="d-flex justify-content-center align-items-center shadow">
				<div className="card w-100 ">
					<div className="d-flex justify-content-between align-items-center container w-75 ">
						<div className="row">
							<div className="col-lg-6">
								<div className="mt-2">
									<div className="mt-5">
										<h1 className="text-uppercase mb-0">{productoo.name}</h1>
										<h4 className="text-uppercase">${productoo.price}</h4>
										<hr />
										<h3>Descripción:{productoo.description} </h3>
										<p></p>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="">
									<img src={productoo.img} className="img-fluid mt-2" alt="" />
								</div>
								
								{terminar ? ( //es verdadero ? (si es verdadero) : (si no lo es)
									<Link 
										to="/cart" 
										className="btn bg-primary text-white btn-block ">
										Terminar compra
									</Link>
								) : (
									<ItemCount stock={productoo.stock} onAdd={onAdd}/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>  */