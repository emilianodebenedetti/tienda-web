import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ producto }) => {
  return (
        <>
			 <div className=" d-flex justify-content-center align-items-center shadow">
				<div className="card w-100 ">
					<div className="d-flex justify-content-between align-items-center container w-75 ">
						<div className="row">
							<div className="col-lg-6">
								<div className="mt-2">
									<div className="mt-5">
										<h4 className="main-heading mt-0">{producto.brand}</h4>
										<h1 className="text-uppercase mb-0">{producto.name}</h1>
										<h4 className="text-uppercase">${producto.price}</h4>
										<hr />
										<h3>Descripción: </h3>
										<p>{producto.description}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="">
									<img src={producto.img} className="img-fluid mt-2" alt="" />
								</div>
								<div className="mb-3">
									<ItemCount producto={producto} initial={1} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</>
  )
}

export default ItemDetail