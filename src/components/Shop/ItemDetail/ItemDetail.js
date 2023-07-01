import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import SwiperArticulo from './SwiperArticulo/SwiperArticulo';
import { useCartContext } from '../../context/CartContext';



export const ItemDetail = ({ product, terminar, onAdd }) => {

  const [selectedTalle, setSelectedTalle] = useState(null);
  const { cart } = useCartContext
  const handleTalleSelection = (selectedTalle) => {
    setSelectedTalle(selectedTalle);
  };

  return (
    <>
      <div className="hero-content grid place-content-center md:mx-auto lg:mx-auto sm:grid-cols-1 lg:grid-cols-2 flex-row lg:flex-row md:grid-cols-2 bg-white rounded text-black">

        <SwiperArticulo imagen={product.imagen} index={product.id} className="same-height-img lg:w-96 md:w-80 w-56 rounded-lg shadow-2xl" />
        <div className="">
          <h2 className="text-3xl lg:text-5xl font-bold">{product.nombre}</h2>
          <p className="py-1 md:py-6">'{product.descripcion}'</p>
          <div className="static inline-block align-bottom grid place-content-start">
            <span className="text-2xl lg:text-3xl">$ {product.precio}</span>
            <h3> Color : {product.color}</h3>
            <h3>
              {product.talle &&
                product.talle.map((talle, index) => (
                  <button
                    key={index}
                    className={`btn btn-outline rounded  ${selectedTalle === talle ? 'selected bg-greyBtn' : ''}`}
                    onClick={() => handleTalleSelection(talle, index)}
                  >
                    {talle}
                  </button>
                ))}
            </h3>
            {terminar ? (
              <>
                <Link to="/cart" className="static bottom-0 mb-0 btn bg-greyBtn text-white btn-block rounded">
                  Terminar Compra
                </Link>
              </>
            ) : (
              <ItemCount
                product={product}
                stock={product.stock}
                onAdd={onAdd}
                id={product.id}
                initial={1}
                talle={product.talle}
                selectedTalle={selectedTalle}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default ItemDetail;