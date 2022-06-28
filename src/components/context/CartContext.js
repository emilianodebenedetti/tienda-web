import  { createContext, useContext, useState } from "react"


const CartContext = createContext() 

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {
    const[cart, setCart] = useState([])

    const isInCart = (id) => cart.find((prod) => prod.id === id) //id sea igual al id que recibimos, los compara

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

        const deleteProduct = newCart.filter(
            (prod) => prod.id !== producto.id
        )

        setCart(deleteProduct)
    }
  
    const deleteCart = () => setCart([])
    console.log(cart)
  
  
    return (
        <CartContext.Provider                    
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