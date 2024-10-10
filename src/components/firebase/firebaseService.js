import { initializeApp } from "firebase/app";
import { 
  addDoc, 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  getFirestore,  
  Timestamp,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPxhDCJ1_shUtPelaE3hQliQXXlk_kgog",
  authDomain: "e-commerce-reactjs-971e5.firebaseapp.com",
  projectId: "e-commerce-reactjs-971e5",
  storageBucket: "e-commerce-reactjs-971e5.appspot.com",
  messagingSenderId: "777417866691",
  appId: "1:777417866691:web:93808b9f82a50dc8d51176"
};

export const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app) 

//Traer los items
export const getItems = async() => {
    const item = await getDocs(collection(db, "articulos"))
    return item
}
export const getImages = async() => {
  const imagen = await getDocs(collection(db, "articulos"))
  return imagen
}

//Traer un ITEM
export const getItem = async(id) => {
    const item = await getDoc(doc(db, "articulos", id))
    return item
}
//Generacion de order
export const generarOrden = async(orden) => {
  const newOrder = addDoc(collection(db, "ordenes"), {
    ...orden,
    date: Timestamp.fromDate(new Date())
  })
  return newOrder
}
//Para manejar el stock
export const actualizarStock = async (itemId, quantity) => {
  const item = await getDoc(doc(db, "articulos", itemId))
  await updateDoc(doc(doc, "articulos", itemId), {
    stock: item.data().stock - quantity,
  })
}
