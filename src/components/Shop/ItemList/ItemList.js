import CarouselHome from '../../Carrusel/CarruselHome';
import { Item } from '../Item/Item';
import React from 'react';

export const ItemList = ({ products, category }) => {

  return (
    <>
      <div className="relative flex flex-wrap gap-4 justify-center text-black">
        <CarouselHome/>
        {products.map((product) => (
                <Item 
                  id={product.id}
                  nombre={product.nombre}/* name */
                  stock={product.stock}/* stock */
                  desription={product.descripcion}/* description */
                  precio={product.precio}/* price */
                  color={product.color}
                  imagen={product.imagen}/* img */
                  key={product.id} 
                />
        ))}
      </div>
    </> 
  );
}

export default ItemList 
