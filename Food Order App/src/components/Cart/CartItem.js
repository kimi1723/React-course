import { useContext } from "react";
import classes from "./CartItem.module.css";
import OrderContext from "../../store/order-context";

const CartItem = ({ price, name, amount }) => {
	const cartCtx = useContext(OrderContext);

	return (
		<li className={classes["cart-item"]}>
			<div>
				<h2>{name}</h2>
				<div className={classes.summary}>
					<span className={classes.price}>{`$${price.toFixed(2)}`}</span>
					<span className={classes.amount}>x {amount}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button
					type="button"
					onClick={() => cartCtx.removeSingleItemFromCart(name)}>
					−
				</button>
				<button type="button" onClick={() => cartCtx.addSingleItemToCart(name)}>
					+
				</button>
			</div>
		</li>
	);
};

export default CartItem;
