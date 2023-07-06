import { useState, useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import OrderContext from "../../../store/order-context";

const HeaderCartButton = () => {
	const mealOrderCtx = useContext(OrderContext);

	return (
		<button className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{mealOrderCtx.items}</span>
		</button>
	);
};

export default HeaderCartButton;
