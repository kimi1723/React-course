import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import OrderContext from "../../store/order-context";

const Cart = ({ onClick }) => {
	const cartCtx = useContext(OrderContext);
	const cart = cartCtx.cart;

	let total = 0;

	const addHandler = () => {
		console.log("asdas");
	};

	const removeHandler = (e, name) => {
		cartCtx.removeSingleItemFromCart(e, name);
	};

	const cartItems = cart.map((item) => (
		<CartItem
			key={item.id}
			price={item.price}
			name={item.name}
			amount={item.amount}
			onRemove={removeHandler}
			onAdd={addHandler}
		/>
	));

	cart.forEach((item) => {
		total += item.price * item.amount;
	});

	const orderSubmitHandler = (e) => {
		e.preventDefault();
		console.log(cart);
		console.log("Total price: " + total);
		onClick(false);
		cartCtx.resetCart();
	};

	return (
		<>
			<Modal onClick={() => onClick(false)}>
				<form onSubmit={orderSubmitHandler}>
					<ul className={classes["cart-items"]}>{cartItems}</ul>
					<div className={classes.total}>
						<p>Total amount</p>
						<p>{`$${total.toFixed(2)}`}</p>
					</div>
					<div className={classes.actions}>
						<button
							type="button"
							className={classes["button--alt"]}
							onClick={() => onClick(false)}>
							Close
						</button>
						<button type="submit" className={classes.button}>
							Order
						</button>
					</div>
				</form>
			</Modal>
		</>
	);
};

export default Cart;
