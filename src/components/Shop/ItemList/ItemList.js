import CarouselHome from '../../Carrusel/CarruselHome';
import { Item } from '../Item/Item';
import React from 'react';

export const ItemList = ({ products, category, filteredProducts, busqueda, totalProducts  }) => {

  const shouldShowCarousel = products.length === totalProducts;/* !category && filteredProducts.length >= products.length; */
  console.log(shouldShowCarousel)

  return (
    <>

      <div className="relative flex flex-wrap gap-4 justify-center text-black">
        {/* {!category && !filteredProducts && <CarouselHome />} */}
        {shouldShowCarousel && <CarouselHome />}
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
    </>
  );
}

export default ItemList
