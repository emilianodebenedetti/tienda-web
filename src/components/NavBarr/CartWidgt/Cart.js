import React from 'react'
import { useState } from "react"
import { useCartContext } from '../../context/CartContext'
import CartList from './CartList'
import { actualizarStock, generarOrden  } from "../../firebase/firebaseService"
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import CartResume from './CartResume'

const compradorInicial = {
   name: "",
   phone: "",
   email: "",
}

export const Cart = () => {
   
   const { cart, deleteCart } = useCartContext()
   const [comprador, setComprador] = useState(compradorInicial)
   const vaciarLista = () => { deleteCart() } 

   cart.forEach((item) => {
      console.log(item)
   })

   let total = 0

   for (let i = 0; i < cart.length; i++) {
      const price = cart[i].price * cart[i].quantity

      total += price
   }


   const orden = {
      comprador,
      item: cart,
      total,
   }

   const handlerSubmit = (e) => {
      e.preventDefault()
      if(comprador.name !== "" && comprador.phone !== "" && comprador.email !== "") {
         generarOrden(orden)
            .then((res) => {
               new swal ({
                  title:"Orden recibida con éxito!",
                  text: `Nº de orden: ${res.id}`,
                  icon: "success",
                  button: "Ok",
               })
            })
            .then(() => cart.forEach(item => actualizarStock(item.id, item.quantity)))
            .then(() => deleteCart())
            .catch(
               (err) => new swal(`Hubo un error`, "Intenta de nuevo", "error")
            )
      } else {
        new swal({
            title:"Error",
            text: "Completa el formulario con tus datos para continuar",
            icon: "error",
            button: "Ok",
        })
      }
   }

   const handlerChange = (e) => {
      setComprador({
         ...comprador,
         [e.target.name]: e.target.value,
      })
   }


   return (
     <>
        <div className="grid grid-cols-1 content-center bg-white">
			<h1 className="p-3 mt-2 divider">Carrito de compras</h1>
			<hr />

			<div className="">
				<div className="col-md-8">
					{cart.length !== 0 && (
						<>
							{cart.map((product) => (
								<CartList key={product.id}	
								product={product} 
								stock={product.stock}
								price={product.price}
								img={product.img}
								/> 
							))}
							<div className="text-end m-3">
								<button className="btn btn-error" onClick={deleteCart}>
									Limpiar Carrito
								</button>
							</div>
						</>
					)}
					{cart.length === 0 && (
						<>
							<br/>
							<h3 className='text-center'>Aún no tienes productos en el carrito...</h3>
							<Link
								to="/"
								className="grid content-center btn text-white d-block w-96 mx-auto mt-3 bg-orange"
							>
								Busquemos algo!{" "}
							</Link>
						</>
					)}
				</div>
				<div className="col-md-4">
					{cart.length !== 0 && (
						<>
							<div className="card ">
								<h2 className="mt-3 text-center">Resumen Carrito</h2>

								{cart.map((prod) => (
									<CartResume 
									key={prod.id} 
									product={prod} 
                           		/>
								))}

								<h3 className='text-center'>Total a pagar: ${total}</h3>

								<hr />
								<div class="mx-auto lg:mx-auto md:mx-auto lg:mx-auto mt-8 flex flex-col justify-center phone-3 bg-cream shadow-lg rounded-2xl">{/* cambiar a beige */}
								<h2 className='text-center text-black text-xl p-10'>Completa con tus datos para terminar tu pedido!</h2>
								<form
									onSubmit={handlerSubmit}
									onChange={handlerChange}
									className="flex flex-col justify-center mb-3 mx-8 "
								>
									<input 
										type="text" 
										placeholder="Nombre" 
										name="name"
										value={orden.name}
										class="w-full mx-auto px-auto mb-2 text-center input input-bordered input-orange w-full max-w-xl bg-white" /* cambiar bg de todos los input e input-orange*/
									/>
									<input 
										type="number" 
										placeholder="Teléfono / Cel" 
										name="phone"
										value={orden.phone}
										class="w-full mx-auto mb-2 text-center input input-bordered input-orange w-full max-w-xl bg-white" 
									/>
									<input 
										type="email" 
										placeholder="Email" 
										name="email"
										value={orden.email}
										class="w-full mx-auto mb-2 text-center input input-bordered input-orange w-full max-w-xl bg-white" 
									/>
									

									<button className="mx-auto w-full btn d-block mt-2 bg-orange text-black">
										Enviar orden
									</button>
								</form>									
								</div> 
							</div>
						</>
					)}
				</div>
			</div>
		</div>
     </>
   )
}

 
 export default Cart
 