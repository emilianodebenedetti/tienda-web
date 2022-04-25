import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    
    console.log('Aqui hay un render del componente Contador');
    const [count, setCount] = useState(0); //Inicializamos estate  
   
    const addHandler = () => {      //al darle click al boton +
        if (count < stock) {
            console.log('Se está sumando');
            setCount(count + 1) 
        }
    }
    
    //restamos valor al Contador
    

    
    const restHandler = () => {      //al darle click al boton -
        if (count >= 2) {
            console.log('Se está restando');
            setCount(count - 1) 
        }                                                           //Alteramos el estado sumándole 1
    }
   
   
   return (
    <>
        <button onClick={restHandler}> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler}> + </button>
        <button>Agregar al carro</button>
    
    </>
  )
}

export default ItemCount