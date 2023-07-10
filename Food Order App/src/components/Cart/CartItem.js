import classes from "./CartItem.module.css";

const CartItem = ({ price, name, amount, onRemove, onAdd }) => {
	const removeHandler = (e, id) => {
		onRemove(e, id);
	};

	const addHandler = (e, id) => {
		onAdd(e, id);
	};

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
					onClick={(e) => {
						removeHandler(e, name);
					}}>
					−
				</button>
				<button type="button" onClick={(e) => addHandler(e, name)}>
					+
				</button>
			</div>
		</li>
	);
};

export default CartItem;
