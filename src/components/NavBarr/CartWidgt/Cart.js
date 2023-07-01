import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import CartList from './CartList';
import { actualizarStock, generarOrden } from '../../firebase/firebaseService';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import CartResume from './CartResume';


const compradorInicial = {
	name: '',
	phone: '',
	email: '',
};

export const Cart = () => {

	const { cart, deleteCart } = useCartContext(); // Acceder al estado y las funciones del contexto
	const [comprador, setComprador] = useState(compradorInicial);
	const vaciarLista = () => {
		deleteCart();
	};

	cart.forEach((item) => {
		console.log(item)
	});

	let total = 0;

	for (let i = 0; i < cart.length; i++) {
		const price = cart[i].precio * cart[i].quantity;
		total += price;
	}

	const generateMessageContent = () => {
		let content = '¡Hola! Me gustaría realizar una orden de compra:\n';

		cart.forEach((product) => {
			content += `${product.nombre}, Talle: ${product.selectedTalle}, Color ${product.color}, Valor : $ ${product.precio}\n`;
		});

		return content;
	};

	const generateWhatsAppLink = () => {
		const telefono = '+59898574847'; // Reemplaza con tu número de teléfono
		const mensaje = generateMessageContent(); // Utiliza el talle seleccionado de la compra
		const encodedMensaje = encodeURIComponent(mensaje);
		return `https://wa.me/${telefono}?text=${encodedMensaje}`;
	};

	const orden = {
		comprador,
		item: cart,
		total,
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (comprador.name !== '' && comprador.phone !== '' && comprador.articulo !== '') {
			generarOrden(orden)
				.then((res) => {
					swal({
						title: 'Orden recibida con éxito!',
						text: `Nº de orden: ${res.id}`,
						icon: 'success',
						button: 'Ok',
					});
				})
				.then(() => cart.forEach((item) => actualizarStock(item.id, item.quantity)))
				.then(() => deleteCart())
				.catch((err) => swal(`Hubo un error`, 'Intenta de nuevo', 'error'));
		} else {
			swal({
				title: 'Error',
				text: 'Completa el formulario con tus datos para continuar',
				icon: 'error',
				button: 'Ok',
			});
		}
	};

	const handlerChange = (e) => {
		setComprador({
			...comprador,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<div className="grid grid-cols-1 content-center h-full">
				<h1 className="mt-2 divider py-8">Carrito de compras</h1>
				<hr />

				<div className="">
					<div className="col-md-8">
						{cart.length !== 0 && (
							<>
								{cart.map((product) => (
									<CartList
										key={product.id}
										product={product}
										talle={product.talle}
										price={product.price}
										img={product.img}
									/>
								))}
								<div className="flex justify-center p-4 col-md-4">
									<button className="btn btn-error" onClick={deleteCart}>
										Limpiar Carrito
									</button>
								</div>
							</>
						)}
						{cart.length === 0 && (
							<div className="h-96">
								<br />
								<h3 className="text-center">
									Aún no tienes productos en el carrito...
								</h3>
								<Link
									to="/"
									className="grid content-center btn text-white d-block w-96 mx-auto mt-4 bg-orange"
								>
									Busquemos algo!{" "}
								</Link>
							</div>
						)}
					</div>
					<div className="col-md-4">
						{cart.length !== 0 && (
							<>
								<div className="card">
									<h2 className="mt-3 text-center">Resumen:</h2>

									{cart.map((prod) => (
										<CartResume key={prod.id} product={prod} />
									))}

									<h3 className="text-center">Total a pagar: ${total}</h3>

									<hr />
									<div className="mx-autolg:mx-auto md:mx-auto lg:mx-auto mt-8 flex flex-col justify-center phone-3 bg-cream shadow-lg rounded-2xl">
										<a
											href={generateWhatsAppLink()}
											target="_blank"
											rel="noopener noreferrer"
											className="mx-auto btn w-full btn d-block mt-2 bg-greyBtn text-white"
										>
											Enviar orden de compra
										</a>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart
