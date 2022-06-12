import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidgt/CartWidget'


export const NavBar = () => {
  return (
    <div className="navbar bg-slate-300">
      <div className="flex-1">
        <Link className="navbar-brand" to="/">
          <a className="btn  btn-ghost normal-case text-xl text-black">MiTienda</a>
        </Link>
      </div> 

      <div className="flex-none">
      
        <div className="flex ">
          <ul className="navbar-nav ">
            <Link to="/category/indumentaria" className="nav-link px-8">
              Indumentaria
            </Link>
            <Link to="/category/calzado" className="nav-link px-8">
              Calzado
            </Link>
            <Link to="/category/accesorios" className="nav-link px-8">
              Accesorios
            </Link>
          </ul>
        </div>
      
        <div className="dropdown dropdown-end"> 
          <CartWidget/>      
        </div>
      </div>
    </div>
       
  )
}

export default NavBar