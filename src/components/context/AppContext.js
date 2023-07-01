import React, { createContext, useContext, useEffect, useState } from 'react';
import { getImages, getItems } from '../firebase/firebaseService';
import { Firestore, collection, getFirestore } from 'firebase/firestore';


/*{const articulosRef = collection(getFirestore(), 'articulos')}*/

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  /*{const [imagenes, setImagenes] = useState([]);}*/

  useEffect(() => {

    let firestoreProducts = [];
    getItems()
      .then((res) =>
        res.docs.forEach((doc) => {
          firestoreProducts.push({ ...doc.data(), id: doc.id, });
        })
      )
      .then(() => setProducts(firestoreProducts));

  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;