import React, { useEffect, useState } from 'react'

const Contador = () => {
       
    //render: componente se destruye y se vuelve a crear (por cambios en el estado o primer vez que creamos el Compnonente)
    console.log('Aqui hay un render del componente Contador');
    const [count, setCount] = useState(0); //Inicializamos estate  

    useEffect( () => {
        console.log('[useEffect] El componente se montó');
        return () => {
            console.log('Se desmontó el componente');
        }
    } , [])

    useEffect( () => {
        console.log('[useEffect] El estado cambió...');
    }, [count])

    
    //agregamos valor al Contador
    const addHandler = () => {      //al darle click al boton +
        console.log('Se está sumando');
        setCount(count + 1)                                                            //Alteramos el estado sumándole 1
    }
    
    //restamos valor al Contador
    const restHandler = () => {      //al darle click al boton -
        console.log('Se está restando');
        setCount(count - 1)                                                            //Alteramos el estado sumándole 1
    }
  
    return (
   <>
        <div>Contador</div>
        <button onClick={restHandler}> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler}> + </button>
        <br/>
        <button>Agregar al carro</button>
   </> 
  )
}

export default Contador