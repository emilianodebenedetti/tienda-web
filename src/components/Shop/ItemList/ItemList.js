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
          products
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
        ):(
          <h3>No hay productos</h3>
        )}
        </div>
      </div>
    </>
  );
}

export default ItemList
