import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    
    console.log('Aqui hay un render del componente Contador');
    const [count, setCount] = useState(1); //Inicializamos state  
   
    const addHandler = () => {      
        if (count < stock) {
            console.log('Se está sumando');
            setCount(count + 1) 
        }
    }

    
    const restHandler = () => {      
        if (count >= 2) {
            console.log('Se está restando');
            setCount(count - 1) 
        }                      
    }
   
   
   return (
    <>
        <h3>Contador</h3>
        <button onClick={restHandler}> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler}> + </button>
        <br/>
        <button>Agregar al carro</button>
    
    </>
  )
}

export default ItemCount