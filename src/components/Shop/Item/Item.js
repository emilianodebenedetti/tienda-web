import React from 'react'
import { Link } from 'react-router-dom';



const Item = ( {product} ) => {
    //const { name, category, img, description, cant, price, id } = product
  
    return (
        <>

            <div className="card w-64 bg-base-100 shadow-xl">
                <figure><img  src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <h1 className='card-subtitle'>{product.price}</h1>
                <div className="card-actions justify-start">
                    <Link to={`/item/${product.id}`} className="btn btn-primary ">Ver más</Link>
                </div>
                </div>
            </div>
     
        </>
    )
};

export default Item