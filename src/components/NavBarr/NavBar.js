import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidgt/CartWidget'


const NavBar = () => {
  return (
    <div className="navbar bg-slate-300">
    <div className="flex-1">
      <a className="btn  btn-ghost normal-case text-xl text-black">MiTienda</a>
    </div> 
    <div className="flex-none">
    <div className="dropdown dropdown-end"> 
    <CartWidget/> 
      
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
        <Link to="/category/calzado">
          Calzado
          <span className="badge">New</span>          
        </Link>
        <Link to="/category/indumentaria">Indumentaria</Link>
        <Link to="/category/accesorios">Accesorios</Link>
      </ul>
    </div>
  </div>
</div>
       
  )
}

export default NavBar