import React from 'react'
import { Link } from 'react-router-dom';



const Item = ( {product} ) => {
  
	const { name, category, img, description, cant, price} = product 
    return (
        <div className='row'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h1 className='card-subtitle'>{price}</h1>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary ">Buy Now</button>
                </div>
                </div>
            </div>
     
        </div>
    )
};

export default Item