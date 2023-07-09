import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import OrderContext from "../../store/order-context";

const Cart = ({ onClick }) => {
	const cartCtx = useContext(OrderContext);
	let total = 0;

	const removeHandler = (e, name) => {
		cartCtx.removeSingleItemFromCart(e, name);
	};

	const addHandler = () => {
		console.log("asdas");
	};

	const cartItems = cartCtx.cart.map((item) => (
		<CartItem
			key={item.id}
			price={item.price}
			name={item.name}
			amount={item.amount}
			onRemove={removeHandler}
			onAdd={addHandler}
		/>
	));

	cartCtx.cart.forEach((item) => {
		total += item.price * item.amount;
	});

	const closeCartHandler = () => {
		onClick(false);
	};
	const orderSubmitHandler = (e) => {
		e.preventDefault();
		console.log(...cartCtx.cart);
		console.log("Total price: " + total);
		closeCartHandler(false);
	};

	return (
		<>
			<Modal onClick={closeCartHandler}>
				<form onSubmit={orderSubmitHandler}>
					<ul className={classes["cart-items"]}>{cartItems}</ul>{" "}
					<div className={classes.total}>
						<p>Total amount</p>
						<p>{`$${total.toFixed(2)}`}</p>
					</div>
					<div className={classes.actions}>
						<button
							type="button"
							className={classes["button--alt"]}
							onClick={closeCartHandler}>
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
