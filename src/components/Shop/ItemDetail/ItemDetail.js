import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import SwiperArticulo from './SwiperArticulo/SwiperArticulo';



export const ItemDetail = ({ product, terminar, onAdd }) => {

  const [selectedTalle, setSelectedTalle] = useState(null);
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
            <h3> Color : {product.color}</h3>
            <span className="text-2xl lg:text-3xl">$ {product.precio}</span>
            <h3>Talle: </h3>
            <h3>
              {product.talle &&
                product.talle.map((talle, index) => (
                  <button
                    key={index}
                    className={`btn btn-outline rounded ${selectedTalle === talle ? 'selected bg-greyBtn' : ''}`}
                    onClick={() => handleTalleSelection(talle, index)}
                  >
                    {talle}
                  </button>
                ))}
            </h3>
            {/* Boton para modal*/}
            <label 
              htmlFor="my_modal_6"
              className='btn bg-transparent border-none hover:bg-transparent'
            >
              Guia de talles <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><g fill="currentColor"><path d="M229.66 90.34L90.34 229.66a8 8 0 0 1-11.31 0L26.34 177a8 8 0 0 1 0-11.31L165.66 26.34a8 8 0 0 1 11.31 0L229.66 79a8 8 0 0 1 0 11.34Z" opacity=".2"/><path d="m235.32 73.37l-52.69-52.68a16 16 0 0 0-22.63 0L20.68 160a16 16 0 0 0 0 22.63l52.69 52.68a16 16 0 0 0 22.63 0L235.32 96a16 16 0 0 0 0-22.63ZM84.68 224L32 171.31l32-32l26.34 26.35a8 8 0 0 0 11.32-11.32L75.31 128L96 107.31l26.34 26.35a8 8 0 0 0 11.32-11.32L107.31 96L128 75.31l26.34 26.35a8 8 0 0 0 11.32-11.32L139.31 64l32-32L224 84.69Z"/></g></svg>
            </label>
            {/* Modal para guia de talles*/}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box bg-grey1 h-screen min-w-fit">
                <h3 className="font-bold text-lg text-center pb-2">Guia de Talles</h3>
                <img 
                  className='rounded-lg'
                  src='https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/No%20articulos%2FGuia%20de%20Talles.jpg?alt=media&token=cd75d8df-a8a4-49dc-a423-4e97297f89a9' 
                  alt='Guia de Talles'
                />
                <div className="modal-action flex justify-center">
                  <label htmlFor="my_modal_6" className="btn">Cerrar</label>
                </div>
              </div>
            </div>
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