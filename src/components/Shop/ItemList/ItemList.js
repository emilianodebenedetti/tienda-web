import { Item } from '../Item/Item';


export const ItemList = ({ products }) => {

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center text-black bg-white">{/* cambiar fondo a color crema */}
        {products.map((product) => (
                <Item 
                  id={product.id}
                  name={product.name}
                  stock={product.stock}
                  desription={product.description}
                  price={product.price}
                  img={product.img}
                  key={product.id} 
                />
        ))}
      </div>
    </>
  );
}

export default ItemList 
