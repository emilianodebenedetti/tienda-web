import React from 'react'
import { Link } from 'react-router-dom';



export const Item = ({ nombre, precio, imagen, color, id }) => { 
    return (
        <div className="card w-80 col itemListCol mb-2 bg-white shadow-xl rounded" height="60">
        <div className="d-flex justify-content-center align-items-center">
            <div className="card p-3 w-100 text-center">
                <div className="d-flex justify-content-evenly align-items-center ">
                    <div className="image">
                    <figure>
                        <img 
                            className='max-h-fit same-height-img' 
                            /*width="240"*/  
                            src={imagen[0]} 
                            alt="#" 
                        />
                        </figure>
                        <h2 className="text-center text-lg font-semibold">{nombre}</h2>
                    </div>
                </div>
                
                <div className="grid grid-rows-2 gap-1">

                    <h3 className='font-semibold mt-2'>$ {precio}</h3>
                    
                    <Link
                        to={`/item/${id}`}
                        className="w-100 max-h-fit image-full btn bg-greyBtn text-white d-block rounded" 
                    >
                        Ver más
                    </Link>
                </div>
                
            </div>
        </div>
    </div>
        
    )
};

export default Item

