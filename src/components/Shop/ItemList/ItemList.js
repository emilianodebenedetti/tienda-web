import { Item } from '../Item/Item';


export const ItemList = ({ products }) => {

  return (
    <>
      <div className="mx-auto flex flex-wrap gap-3 justify-center"> {/*  */}
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
