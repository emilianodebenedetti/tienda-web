import React, { useEffect, useState } from 'react'

const ItemList = () => {
    const products = [
        {
            id:1,
            name : "Air Jordan 1 Smoke Grey Red",
            img :'../images/airjordan-sniper.jpg',
            precio:  300
        },
        {
            id:2,
            name : "Campera Nike Nylon",
            img :'../images/camper2-sniperuy.jpg',
            precio:  350
        },
        {
            id:3,
            name : "Jordans basket skyblue",
            img :'../images/jordanbasket-sniper.jpg',
            precio: 400
        },
        {
            id:4,
            name : "Air Jordan 1 Red & Black",
            img :'../images/jordans-sniperuy.jpg',
            precio: 250,
        },
        {
            id:5,
            name : "Air Jordan 1 High",
            img :'../images/zapas-beige-sniperuy.jpg',
            precio: 300,
        },
        {
            id:6,
            name : "Air Jordan 1 High",
            img :'../images/zapas-beige-sniperuy.jpg',
            precio: 300,
        }
        
    ];
    
    const [prod, setProds] = useState([])

    useEffect(() => {
      console.log('[ItemList ] Mounting');
      console.log('Lista de paises', products);

        const promesa = new Promise( (resolve) => {
        /* const random = Math.random()
        console.log('Random number', random); */
        
        setTimeout( () => {
           resolve(products)
        }, 2000)
      })

      promesa
        .then( result => {
          console.log('Promise realizada', result);
          setProds(result)
        })
       .catch( err => {
          console.log('Promesa rechazada', err);
        })

        console.log('Se terminó de ejecutar useEffect');
     
    }, [])
    
    
    productos.forEach ((producto => {
        const {nombre, img, precio} = producto;
        html += `        
            <p>Nombre: ${nombre}</p>
            <img href="${img}" target="_blank">Ver Imagen</img>
            <p> $${precio}</p>
            <button> añadir al carro </button>
        `;
    }));


    return (
    <div style={{border:'solid green 2px'}}>
      <h1>ProductsMap </h1>
      {products.map( (id, name, img, price) => <li key={id}>{id}{name}{img}{price}</li>)}
    </div>
  )
}

export default ItemList