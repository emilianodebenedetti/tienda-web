import CarouselHome from '../../Carrusel/CarruselHome';
import { Item } from '../Item/Item';
import React from 'react';

export const ItemList = ({ products, totalProducts  }) => {

  const shouldShowCarousel = products.length === totalProducts;
  return (
    <>
      <div >
        {shouldShowCarousel && <CarouselHome />}
        {!shouldShowCarousel && <h1 className='text-center text-black text-xl pt-4'>Mostrando resultados filtrados ...</h1>}
        
        <div className="relative flex flex-wrap gap-4 justify-center text-black py-12">
          {products
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
              ))}
          </div>
      </div>
    </>
  );
}

export default ItemList
