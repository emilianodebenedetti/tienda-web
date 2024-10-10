import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import CartWidget from './CartWidgt/CartWidget'
import ItemDetailContainer from '../Shop/ItemDetail/ItemDetailContainer'
import ItemListContainer from '../Shop/ItemList/ItemListContainer'
import Footer from '../footer/Footer'
import Cart from './CartWidgt/Cart'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseService'

export const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const location = useLocation();

  const productsCollection = collection(db, "articulos")

  /* espero determinado lapso de tiempo para ejecutar busqueda */
  const debouncedBuscarProductos = debounce(() => {
    buscarProductos();
  }, 1000);

  //logica buscador
  const buscarProductos = async () => { 
    const data = await getDocs(productsCollection)
    let localfilteredProducts = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((product) =>
        product.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    setFilteredProducts(localfilteredProducts)
  }

  useEffect(() => {
    debouncedBuscarProductos();
  }, [busqueda])
 
  const resetearBusqueda = () => {
    setBusqueda('')
  }
  const handleLinkClick = () => {
    setIsNavbarOpen(false)
  }

  const ocultarBuscador = () => {
  }

  return (
       <>
        <div className={`drawer ${isNavbarOpen ? 'open' : ''}`}>
          <input 
            id="my-drawer-3" 
            type="checkbox" 
            className="drawer-toggle" 
            checked={isNavbarOpen} 
            onChange={() => setIsNavbarOpen(!isNavbarOpen)} 
          /> 
          <div className="drawer-content flex flex-col">
          {/*  <!-- Navbar --> */}
          {/* <div className='sticky top-0 z-50 text-center text-black tracking-wide'>
            ¡Envios a todo el país!
          </div> */}
            <div className="sticky top-0 z-50 w-full navbar bg-black" >
              <div className="flex lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
                <Link to="/" className="navbar-start px-2 mx-2 text-xl text-white font-semibold" alt='Titulo'>
                  <h1>E-Commerce DEMO</h1>
                </Link>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Contenido Navbar --> */}
                  <Link 
                    to="/category/Remeras"
                    onClick={() => {
                      resetearBusqueda()
                      ocultarBuscador()
                    }}  
                    className="flex-1 nav-link px-4 text-white"
                  >
                    Remeras
                  </Link>
                  <Link 
                    to="/category/Camperas" 
                    onClick={() => {
                      resetearBusqueda()
                      ocultarBuscador()
                    }}  
                    className="flex-1 nav-link px-4 text-white"
                  >
                    Camperas
                  </Link>
                  <Link 
                    to="/category/Pantalones-Shorts" 
                    onClick={() => {
                      resetearBusqueda()
                      ocultarBuscador()
                    }} 
                    className="flex-1 nav-link px-4 text-white"
                  >
                    Pantalones/Shorts
                  </Link>	
                  <Link 
                    to="/category/Championes" 
                    onClick={() => {
                      resetearBusqueda()
                      ocultarBuscador()
                    }} 
                    className="flex-1 nav-link px-4 text-white"
                  >
                    Championes
                  </Link>	
                </ul>
              </div>
              <div className="navbar-end text-black">
              {/* Barra busqueda mobile */}
              {location.pathname == '/' && (
                <div className='dropdown dropdown-left'> 
                  <button tabIndex={0} role="button" className="lg:hidden btn btn-ghost btn-circle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                  <div tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box ">
                    <input 
                      type="text" 
                      placeholder="Buscar articulo" 
                      className="input bg-negro lg:block" 
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      />
                  </div>
                </div>
              )}
              {/* barra busqueda desktop */}
              {location.pathname == '/' && (
                <div className=''>
                <input 
                  type="text" 
                  placeholder="Buscar articulo" 
                  className="input bg-negro hidden lg:block" 
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
              )}
              <div className="dropdown dropdown-end text-white"> 
                <CartWidget/>      
              </div>
            </div>
            </div>
            {/* <!-- Contenido aqui de la página --> */}             
            <Routes>{/*  HashRouter*/}
               <Route exact path="/" element={<ItemListContainer filteredProducts={filteredProducts}/>}/>
               <Route path="/category/:categoryId" element={<ItemListContainer filteredProducts={filteredProducts}/>}/>
               <Route path="/item/:id" element={<ItemDetailContainer/>} />
               <Route path="/cart" element={<Cart/>}/>
            </Routes>  
          <Footer/>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay" ></label> 
            <ul id="list-link-mobile"  className="menu p-4 pt-12 pb-24 overflow-y-auto w-80 font-semibold tracking-wide bg-grey" >
              {/* <!-- Sidebar content here --> */}
              <h2 className="pb-12 px-2 mx-2 text-xl text-white">E-Commerce DEMO</h2>
              <Link 
                to="/category/Remeras" 
                className="flex-1 nav-link px-8 text-white "
                onClick={() => {
                  handleLinkClick()
                  resetearBusqueda()
                  ocultarBuscador()
                }}
              >
                Remeras
              </Link>
              <Link 
                to="/category/Camperas" 
                className="flex-1 nav-link px-8 text-white"
                onClick={() => {
                  handleLinkClick()
                  resetearBusqueda()
                  ocultarBuscador()
                }}
              >
                Camperas
              </Link>
              <Link 
                to="/category/Pantalones-Shorts" 
                className="flex-1 nav-link px-8 text-white "
                onClick={() => {
                  handleLinkClick()
                  resetearBusqueda()
                  ocultarBuscador()
                }}
              >
                Pantalones/Shorts
              </Link>
              <Link 
                to="/category/Championes" 
                className="flex-1 nav-link px-8 text-white "
                onClick={() => {
                  handleLinkClick()
                  resetearBusqueda()
                  ocultarBuscador()
                }}
              >
                Championes
              </Link>                              
            </ul>                       
          </div>         
        </div>
    </>
  )
}

export default NavBar

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }; 
}

