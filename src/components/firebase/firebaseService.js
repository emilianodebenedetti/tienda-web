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
  apiKey: "AIzaSyAwstK8mEXhzxns3hj1eB5Vbo3isKUAkOI",
  authDomain: "backend-proyect-e58f8.firebaseapp.com",
  projectId: "backend-proyect-e58f8",
  storageBucket: "backend-proyect-e58f8.appspot.com",
  messagingSenderId: "794506331196",
  appId: "1:794506331196:web:a02b0490dd9ee404b06f39"
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
//Buscar productos  
/* export const searchArticles = async (searchQuery) => {
  const articlesRef = collection(db, 'articulos');
  const n = query(articlesRef, where('nombre', '>=', searchQuery));
  const snapshot = await getDocs(n);
  const articles = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return articles;
}; */
