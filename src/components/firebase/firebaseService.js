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
  apiKey: "AIzaSyBsfkqk_f4k9c_wKWXSUqkdd0qdYaHa4Rc",
  authDomain: "entregafinal-react.firebaseapp.com",
  projectId: "entregafinal-react",
  storageBucket: "entregafinal-react.appspot.com",
  messagingSenderId: "413759372781",
  appId: "1:413759372781:web:27e64d9e9cc920a36dbbe4"
};


const app = initializeApp(firebaseConfig); 


const db = getFirestore() 

//Traer los items
export const getItems = async() => {
    const items = await getDocs(collection(db, "items"))
    return items
}

//Traer un ITEM
export const getItem = async(id) => {
    const item = await getDoc(doc(db, "items", id))
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
  const item = await getDoc(doc(db, "items", itemId))
  await updateDoc(doc(doc, "items", itemId), {
    stock: item.data().stock - quantity,
  })
}
