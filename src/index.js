import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import { configMySQL } from './options/config';
import {ClienteSql} from './options/sql'; */

/* const knex = require('knex')({
  client: 'mysql',
  connection: {
      host : '127.0.0.1',
      port: '3306',
      user : 'root',
      password : '',
      database: 'articulos'
    },
  }  
);



const sql = new ClienteSql(options)

sql.mostrarTabla()
  .then (() => {
    console.log(sql.articulos)
  })
 */




/* import { initializeApp } from "firebase/app"; */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyAPxhDCJ1_shUtPelaE3hQliQXXlk_kgog",
  authDomain: "e-commerce-reactjs-971e5.firebaseapp.com",
  projectId: "e-commerce-reactjs-971e5",
  storageBucket: "e-commerce-reactjs-971e5.appspot.com",
  messagingSenderId: "777417866691",
  appId: "1:777417866691:web:93808b9f82a50dc8d51176"
}; */

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HashRouter> */}
      <App />
    {/* </HashRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

