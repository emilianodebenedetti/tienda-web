import React from 'react'
import Item from '../Item/Item';


export const ItemList = ({ category }) => {
  console.log(category)

  return (
    <>
      <div className='row'>
        {category && 
              category.map((product) => (
                <Item
                  id={product.id}
                  name={product.name}
                  stock={product.stock}
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
















/* const [productos, setProds] = useState([])

    useEffect(() => {
      console.log('[ItemList ] Mounting');
      console.log('Lista de paises', products);

        const promesa = new Promise( (resolve) => {
        /* const random = Math.random()
        console.log('Random number', random); */
        
      /*setTimeout( () => {
           resolve(products)
        }, 2000)
      }) */

     /*  promesa
        .then( result => {
          console.log('Promise realizada', result);
          setProds(result)
        })
       .catch( err => {
          console.log('Promesa rechazada', err);
        })

        console.log('Se terminó de ejecutar useEffect');
     
    }, []) */
    
    
    /* products.forEach ((producto => {
        const {nombre, img, precio} = producto;
    })); */
  