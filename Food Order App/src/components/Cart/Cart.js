import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import OrderContext from "../../store/order-context";

const Cart = ({ onClick }) => {
	const cartCtx = useContext(OrderContext);
	const cart = cartCtx.cart;

	const addHandler = (e, name) => {
		cartCtx.addSingleItemToCart(e, name);
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

	const orderSubmitHandler = (e) => {
		e.preventDefault();
		console.log(cart);
		console.log("Total price: " + cartCtx.total);
		onClick(false);
		cartCtx.resetCart();
	};

	let orderState = false;

	cartCtx.items > 0 ? (orderState = true) : (orderState = false);

	return (
		<>
			<Modal onClick={() => onClick(false)}>
				<form onSubmit={orderSubmitHandler}>
					<ul className={classes["cart-items"]}>{cartItems}</ul>
					<div className={classes.total}>
						<p>Total amount</p>
						<p>{`$${cartCtx.total.toFixed(2)}`}</p>
					</div>
					<div className={classes.actions}>
						<button
							type="button"
							className={classes["button--alt"]}
							onClick={() => onClick(false)}>
							Close
						</button>
						{orderState && (
							<button type="submit" className={classes.button}>
								Order
							</button>
						)}
					</div>
				</form>
			</Modal>
		</>
	);
};

export default Cart;
