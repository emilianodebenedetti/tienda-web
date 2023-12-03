import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CartWidget from './CartWidgt/CartWidget'
import ItemDetailContainer from '../Shop/ItemDetail/ItemDetailContainer'
import ItemListContainer from '../Shop/ItemList/ItemListContainer'
import Footer from '../footer/Footer'
import Cart from './CartWidgt/Cart'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseService'


export const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [busqueda, setBusqueda] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([]);


  const productsCollection = collection(db, "articulos")

  //logica buscador
  const buscarProductos = async () => {
    const data = await getDocs(productsCollection);
    let localfilteredProducts = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((product) =>
        product.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    setFilteredProducts(localfilteredProducts)
  };
  useEffect(() => {
    buscarProductos();
  }, [busqueda]);

  //cerrar automaticamente navbar lateral
  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

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
          <div className='sticky top-0 z-50 text-center text-black tracking-wide'>
            ¡Envios a todo el país!
          </div>
            <div className="sticky top-0 z-50 w-full navbar bg-black" >
              <div className="flex lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div> 
              <Link to="/" className=" navbar-start px-2 mx-2 text-xl text-white font-semibold" alt='Titulo'>
                <h1>UNIVERSAL FITNESS</h1>
              </Link>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Contenido Navbar --> */}
                  <Link to="/category/Calzas" className="flex-1 nav-link px-4 text-white ">
                    Calzas
                  </Link>
                  <Link to="/category/Abrigos" className="flex-1 nav-link px-4 text-white">
                    Abrigos
                  </Link>
                  <Link to="/category/Musculosas&Remeras" className="flex-1 nav-link px-4 text-white">
                    Musculosas&Remeras
                  </Link>
                  <Link to="/category/Tops" className="flex-1 nav-link px-4 text-white">
                    Tops
                  </Link>
                  <Link to="/category/Biker&Shorts" className="flex-1 nav-link px-4 text-white">
                    Biker&Shorts
                  </Link>
                   			
                </ul>
              </div>
              <div className="navbar-end text-black">
                  {/* Barra Busqueda */}
                  <div className=''>
                    <input 
                      type="text" 
                      placeholder="Buscar articulo" 
                      className="input bg-negro" 
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                    />
                    {/* <button className="btn btn-square" onClick={() => buscarProductos()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button> */}
                  </div>
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
              <h2 className="pb-12 px-2 mx-2 text-xl text-white">UNIVERSAL FITNESS</h2>
              <Link 
                to="/category/Calzas" 
                className="flex-1 nav-link px-8 text-white pt-12"
                onClick={handleLinkClick}
              >
                CALZAS
              </Link>
              <Link 
                to="/category/Abrigos" 
                className="flex-1 nav-link px-8 text-white"
                onClick={handleLinkClick}
              >
                ABRIGOS
              </Link>
              <Link 
                to="/category/Musculosas&Remeras" 
                className="flex-1 nav-link px-8 text-white "
                onClick={handleLinkClick}
              >
                MUSCULOSAS & REMERAS
              </Link>
              <Link 
                to="/category/Tops" 
                className="flex-1 nav-link px-8 text-white"
                onClick={handleLinkClick}
              >
                TOPS
              </Link>
              <Link 
                to="/category/Biker&Shorts" 
                className="flex-1 nav-link px-8 text-white "
                onClick={handleLinkClick}
              >
                BIKER & SHORTS
              </Link>                              
            </ul>                       
          </div>         
        </div>
    </>
  )
}

export default NavBar

