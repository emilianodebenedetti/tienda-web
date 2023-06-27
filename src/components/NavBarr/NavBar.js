import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CartWidget from './CartWidgt/CartWidget'
import ItemDetailContainer from '../Shop/ItemDetail/ItemDetailContainer'
import ItemListContainer from '../Shop/ItemList/ItemListContainer'
import Footer from '../footer/Footer'
import Cart from './CartWidgt/Cart'


export const NavBar = () => {
  return (
       <>
        <div className="drawer ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle " /> 
          <div className="drawer-content flex flex-col">
          {/*  <!-- Navbar --> */}
          <div className='sticky top-0 z-50 text-center text-black '>
            ¡Envios a todo el país!
          </div>
            <div className="sticky top-0 z-50 w-full navbar bg-black" >
              <div className="flex lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div> 
              <Link to="/" className=" navbar-start px-2 mx-2 text-xl text-white" alt='Titulo'>
                <h1>UNIFIT LOVE</h1>
              </Link>
              <div className="flex-none hidden lg:block ">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  <Link to="/category/Calzas" className="flex-1 nav-link px-4 text-white">
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
                  <Link to="/category/SALE" className="flex-1 nav-link px-4 text-white">
                    SALE
                  </Link>
                  <Link to="/category/Biker&Shorts" className="flex-1 nav-link px-4 text-white">
                    Biker&Shorts
                  </Link>  			
                </ul>
              </div>
              <div className="navbar-end text-black">
                  {/* btn busqueda mobile */}
                  {/* <button className="btn btn-ghost btn-circle text-white lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button> */}

                  {/* barra buscar (desktop) */}
                  

                  <div className="dropdown dropdown-end text-white"> 
                    <CartWidget/>      
                  </div>
                </div>
              </div>
            {/* <!-- Page content here --> */}  
            
             <Routes>{/*  HashRouter*/}
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route 
                  path="/category/:categoryId" 
                  element={<ItemListContainer />} 
                />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>  
          <Footer/>
          </div> 
          
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay" ></label> 
            <ul className="menu p-4 pt-12 overflow-y-auto w-80">
              {/* <!-- Sidebar content here --> */}
              <h2 className="pb-10 px-2 mx-2 text-xl text-white"></h2>
              <Link to="/category/Calzas" className="flex-1 nav-link px-8 text-white">
                Calzas
              </Link>
              <Link to="/category/Abrigos" className="flex-1 nav-link px-8 text-white">
                Abrigos
              </Link>
              <Link to="/category/Musculosas&Remeras" className="flex-1 nav-link px-8 text-white">
                Musculosas&Remeras
              </Link>
              <Link to="/category/Tops" className="flex-1 nav-link px-8 text-white">
                Tops
              </Link>
              <Link to="/category/SALE" className="flex-1 nav-link px-8 text-white">
                SALE
              </Link>
              <Link to="/category/Biker&Shorts" className="flex-1 nav-link px-8 text-white">
                Biker&Shorts
              </Link>                              
            </ul>                       
          </div>
        </div>
    </>
  )
}

export default NavBar

