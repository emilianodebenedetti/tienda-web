import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartList from './CartList'


const Cart = () => {
   const { cart, deleteFromCart } = useCartContext()
   const vaciarLista = () => { deleteFromCart() } //usamos funcion anonima para no generar un render infinito
   


    return (
     <>
        <div>Cart</div>
        <button onClick={vaciarLista}> Vaciar lista </button>
        { cart.map( p => <CartList key={p.id} prod={p}/> ) }
     </>
   )
}
 
 export default Cart