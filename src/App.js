import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
       
      <NavBar/>        
      <ItemListContainer saludo='Sitio en construcción, vuelva más tarde...'/>
      <ItemCount stock={5} initial={1} />    
      <br/>
    </div>
  );
}

export default App;
