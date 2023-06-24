import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './components/context/AppContext';
import NavBar from './components/NavBarr/NavBar';
import React from 'react';
import CartContextProvider from './components/context/CartContext';



function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
/* 
<CartContextProvider>
          <BrowserRouter>
            <NavBar />
              <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route 
                  path="/category/:categoryId" 
                  element={<ItemListContainer />} 
                />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
            <Footer/>
          </BrowserRouter>
        </CartContextProvider>
*/