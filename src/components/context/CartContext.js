import { createContext, useContext, useState, useEffect } from "react"
import React from 'react';


const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [selectedTalle, setSelectedTalle] = useState(null)

    const isInCart = (id) => cart.find((prod) => prod.id === id) //id sea igual al id que recibimos, los compara

    // const addToCart = (prod, cantidad, selectedTalle) => {
    //     const newCart = [...cart]

    //     const productoIsInCart = isInCart(prod.id)

    //     if (productoIsInCart) {
    //         newCart[
    //             newCart.findIndex(prod => prod.id === productoIsInCart.id)
    //         ].quantity += cantidad

    //         setCart(newCart)

    //         return
    //     }

    //     prod.quantity = cantidad
    //     setCart([...newCart, prod])

    // }

    const addToCart = (prod, cantidad, selectedTalle) => {
        const productoIsInCart = isInCart(prod.id);

        if (productoIsInCart) {
            const newCart = cart.map((item) =>
                item.id === prod.id
                    ? { ...item, quantity: item.quantity + cantidad, selectedTalle }
                    : item
            );
            setCart(newCart);
        } else {
            setCart(prev => [...prev, { ...prod, quantity: cantidad, selectedTalle }]);
        }
    };


    const deleteFromCart = (producto) => {
        const newCart = [...cart]

        const productIsInCart = isInCart(producto.id)

        if (!productIsInCart) {
            return
        }

        const deleteProduct = newCart.filter(
            (prod) => prod.id !== producto.id
        )

        setCart(deleteProduct)
    }

    const deleteCart = () => setCart([])
    useEffect(() => {
        console.log("carrito", cart);
    }, [cart]);
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                deleteFromCart,
                deleteCart,
                setCart,
                selectedTalle,
                setSelectedTalle
            }}
        >
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider