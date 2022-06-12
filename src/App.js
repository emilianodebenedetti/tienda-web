import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppContextProvider from './components/context/AppContext';
import CartContextProvider from './components/context/CartContext';
import Footer from './components/footer/Footer';
import Cart from './components/NavBarr/CartWidgt/Cart';
import CartView from './components/NavBarr/CartWidgt/CartView';
import NavBar from './components/NavBarr/NavBar';
/* import ProductDetail from './components/Shop/firebase/ProductDetail'; */
/* import ItemCount from './components/Shop/ItemCount/ItemCount';  */
import ItemDetailContainer from './components/Shop/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/Shop/ItemList/ItemListContainer';



function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route 
                  exact path="/" 
                  element={<ItemListContainer/>}
                  />
                <Route 
                  path="/category/:categoryId" 
                  element={<ItemListContainer/>} 
                  />
                <Route 
                  path="/item/:id" 
                  element={<ItemDetailContainer/>} 
                  />
                <Route 
                  path="/cart" 
                  element={<Cart/>}
                  />
              </Routes>
              <Footer/>
            </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
