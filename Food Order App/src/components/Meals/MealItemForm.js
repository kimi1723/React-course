import { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";
import OrderContext from "../../store/order-context";

const MealItemForm = ({ id }) => {
	// const [mealOrder, setMealOrder] = useState([]);
	const mealOrderCtx = useContext(OrderContext);

	const amountHandler = (amount) => {
		// setMealOrder((previousMeals) => {
		// 	return [...previousMeals, { id: id, amount: amount }];
		// });
		mealOrderCtx.setAmount(amount);
	};

	const addToCartHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form className={classes.form} onSubmit={addToCartHandler}>
			<Input
				label="Amount"
				id={Math.random()}
				type="number"
				onChange={amountHandler}
			/>
			<button type="submit">+ Add</button>
		</form>
	);
};

export default MealItemForm;
