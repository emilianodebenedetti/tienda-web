import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div class="navbar bg-slate-300">
    <div class="flex-1">
      <a class="btn  btn-ghost normal-case text-xl text-black">MiTienda</a>
    </div> 
    <div class="flex-none">
    <div class="dropdown dropdown-end">
    {/* Item carrito con opcion de ver carrito*/}  
    <CartWidget/> 
      
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
        <li>
          <a class="justify-between">
            Perfil
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Configuración</a></li>
        <li><a>Cerrar sesión</a></li>
      </ul>
    </div>
  </div>
</div>
       
  )
}

export default NavBar