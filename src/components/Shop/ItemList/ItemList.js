import CarouselHome from '../../Carrusel/CarruselHome';
import { Item } from '../Item/Item';
import React from 'react';

export const ItemList = ({ products, totalProducts, filteredProducts  }) => {
  const shouldShowCarousel = products.length === totalProducts  && filteredProducts.length > 0;
  return (
    <>
      <div >
        {shouldShowCarousel &&  <CarouselHome />}
          
        <h2 className="text-center text-black pt-2 text-2xl text-center font-bold" >Nuestros productos ...</h2>
        <div className="relative flex flex-wrap gap-4 justify-center text-black py-12">
        {filteredProducts.length > 0 ? (
            filteredProducts
              .sort((a, b) => a.nombre.localeCompare(b.nombre))
              .map((product) => (
                <Item
                  id={product.id}
                  nombre={product.nombre}
                  stock={product.stock}
                  desription={product.descripcion}
                  precio={product.precio}
                  color={product.color}
                  imagen={product.imagen}
                  key={product.id}
                />
              ))
          ) : (
            <div>
              <h1 className='text-center text-black text-xl'>No se encontraron productos</h1>
              <p className='text-center pt-2'>Revise sus terminos de busqueda</p>
            </div>
          )}
          </div>
      </div>
    </>
  );
}

export default ItemList
