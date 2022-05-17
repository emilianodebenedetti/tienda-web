import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppContextProvider from './components/context/AppContext';
import CartContextProvider from './components/context/CartContext';
import CartView from './components/NavBarr/CartWidgt/CartView';
import NavBar from './components/NavBarr/NavBar';
/* import ItemCount from './components/Shop/ItemCount/ItemCount'; */
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
                  path="/" 
                  element={<ItemListContainer/>}
                />
                <Route 
                  path="/category/:categoryId" 
                  element={<ItemListContainer />} 
                />
                <Route 
                  path="/item/:id" 
                  element={<ItemDetailContainer />} 
                />
                <Route 
                  path="/cart" 
                  element={<CartView/>}
                />
              </Routes>
            </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
