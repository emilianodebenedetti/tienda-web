

//metemos los valores a un array nuevo para no modificar el original

import { createContext, useContext, useState } from "react"

const CartContext = createContext() //contexto creado

export const useCartContext = () => useContext(CartContext)

//proveedor
const CartContextProvider = ({ children }) => {
    //logica
    const[cart, setCart] = useState([])

    //validar si esta el item en el carrito
    const isInCart = (id) => cart.find((prod) => prod.id === id) //id sea igual al id que recibimos, los compara

    //Agregar item al carro
    const addToCart = (prod, cantidad) => {
        const newCart = [...cart]

        const productoIsInCart = isInCart(prod.id)
        
        if(productoIsInCart) {
                newCart[
                    newCart.findIndex(prod => prod.id === productoIsInCart.id)
            ].quantity += cantidad

            setCart(newCart)
            return
        }

        prod.quantity = cantidad 
        setCart([...newCart, prod])
    }

    const deleteFromCart = (producto) => {
        const newCart = [...cart]

        const productIsInCart = isInCart(producto.id)

        if(!productIsInCart) {
            return 
        }

        const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

        setCart(deleteProduct)
    }
  
    const deleteCart = () => setCart([])
    console.log(cart)
  
  
    return (
        <CartContext.Provider                    //value, que valores queremos exportar(carrito, products)
            value={{
                cart,
                addToCart,
                deleteFromCart,
                deleteCart,
                setCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
        
}

export default CartContextProvider