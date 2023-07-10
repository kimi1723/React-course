import { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";
import OrderContext from "../../store/order-context";

const MealItemForm = ({ id, price, name }) => {
	const [orderState, setOrderState] = useState({
		id: id,
		amount: 1,
		price: price,
		name: name,
	});

	const mealOrderCtx = useContext(OrderContext);

	const amountHandler = (amount) => {
		setOrderState({
			id: id,
			amount: amount,
			price: price,
			name: name,
		});
	};

	const addToCartHandler = (e) => {
		e.preventDefault();
		mealOrderCtx.addToCart(orderState);
		setOrderState({
			id: id,
			amount: 1,
			price: price,
			name: name,
		});
	};

	return (
		<form className={classes.form} onSubmit={addToCartHandler}>
			<Input
				label="Amount"
				id={Math.random()}
				type="number"
				onChange={amountHandler}
				value={orderState.amount}
			/>
			<button type="submit">+ Add</button>
		</form>
	);
};

export default MealItemForm;
