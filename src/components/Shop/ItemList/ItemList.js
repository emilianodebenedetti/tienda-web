import CarouselHome from '../../Carrusel/CarruselHome';
import { Item } from '../Item/Item';
import React from 'react';

export const ItemList = ({ products }) => {

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center text-black">
        <CarouselHome/>
        {/* <h2 className='text-center'>NUESTROS ARTÍCULOS</h2> */}
        {products.map((product) => (
                <Item 
                  id={product.id}
                  nombre={product.nombre}/* name */
                  stock={product.stock}/* stock */
                  desription={product.descripcion}/* description */
                  precio={product.precio}/* price */
                  imagen={product.imagen}/* img */
                  key={product.id} 
                />
        ))}
      </div>
    </> 
  );
}

export default ItemList 
