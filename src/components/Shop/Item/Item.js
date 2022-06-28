import React from 'react'
import { Link } from 'react-router-dom';



export const Item = ({ name, price, img, description, id }) => { 
    return (
        <div className="card col itemListCol mb-2 card  bg-cream shadow-xl">
        <div className="d-flex justify-content-center align-items-center">
            <div className="card p-3 w-100">
                <div className="d-flex justify-content-evenly align-items-center ">
                    <div className="mt-2">
                        <h2 className="card-title text-center">{name}</h2>
                        
                        <div className="mt-5">
                            
                            <h1 className="main-heading mt-0">{description}</h1>
                        </div>
                    </div>
                    <div className="image">
                    <figure><img width="200" src={img} alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="">
                    <div className="col ver-mas mt-4 flex space-x-14">
                        <Link
                            to={`/item/${id}`}
                            className="w-100 btn bg-orange  text-white d-block"  /* cambiar a naranja */
                        >
                            Ver mas
                        </Link>
                        
                        <h3 className='card-subtitle'>US$ {price}</h3>

                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
};

export default Item

