import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import SwiperArticulo from './SwiperArticulo/SwiperArticulo';

export const ItemDetail = ({ product, terminar, onAdd }) => {
	console.log(product);
	console.log(terminar);
	console.log(onAdd);

  return (
    <>
      <div className="hero-content grid place-content-center md:mx-auto lg:mx-auto sm:grid-cols-1 lg:grid-cols-2 flex-row lg:flex-row md:grid-cols-2 bg-white rounded text-black">
        {/* Pensar función de map para array imagen */}
        <SwiperArticulo imagen={product.imagen} index={product.id} className="same-height-img lg:w-96 md:w-80 w-56 rounded-lg shadow-2xl" />
        <div className="">
          <h2 className="text-3xl lg:text-5xl font-bold">{product.nombre}</h2>
          {/* {product.name} */}
          <p className="py-1 md:py-6">'{product.descripcion}'</p>
          {/* {product.description} */}
          {/*FALTA COLOR*/ }
          <div className="static inline-block align-bottom grid place-content-start">
            <span className="text-2xl lg:text-3xl">$ {product.precio}</span>
            <h3> Color : {product.color}</h3>
            <h3>Talles:  {product.talle}</h3>
            {terminar ? (
              <>
                <Link to="/cart" className="btn bg-greyBtn text-white btn-block rounded">
                  Terminar Compra
                </Link>
              </>
            ) : (
              <ItemCount product={product} stock={product.stock} onAdd={onAdd} id={product.id} initial={1} talles={product.talle}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
 
export default ItemDetail;
