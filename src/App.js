import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBarr/NavBar';
import ItemCount from './components/Shop/ItemCount/ItemCount';
import ItemDetailContainer from './components/Shop/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/Shop/ItemList/ItemListContainer';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
      <ItemCount/>
    </>
  );
}

export default App;
