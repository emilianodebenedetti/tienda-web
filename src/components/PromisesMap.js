import React, { useEffect, useState } from 'react'

const PromisesMap = () => {
    //convertir a array completo
    const paisesList = ['Mèxico', 'Argentina', 'Australia', 'Colombia', 'Venezuela', 'Uruguay', 'Perú']
    
    const [paises, setPaises] = useState([])

    useEffect(() => {
      console.log('[PromisesMap ] Mounting');
      console.log('Lista de paises', paisesList);

      const promesa = new Promise( (resolve, reject) => {
        const random = Math.random()
        console.log('Random number', random);
        
        setTimeout( () => {
            if (random >= 0.5) {
               resolve(paisesList)
            } else {
               reject('Rechazada!!')
            }
        }, 5000)
      })

      promesa
        .then( result => {
          console.log('La promesa fue satisfecha', result);
          setPaises(result)
        })
       .catch( err => {
          console.log('La promesa fue rechazada', err);
        })

        console.log('Se terminó de ejecutar lo del useEffect');
     
    }, [])

    return (
    <div style={{border:'solid green 2px'}}>
        <h1>PaisesMap </h1>
        {paises.map( (p, i) => <li key={i}>{p}</li>)}
    </div>
  )
}

export default PromisesMap