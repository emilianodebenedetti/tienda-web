import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <head>
        <link href="/dist/output.css" rel="stylesheet"></link> 
      </head>
       
      <NavBar/>
      <body>
          
        <h1 class="text-1xl font-bold underline align-middle">
          Sitio en construcción, vuelva más tarde..
        </h1>
        <ItemListContainer/>
       
      </body>
    </div>
  );
}

export default App;
