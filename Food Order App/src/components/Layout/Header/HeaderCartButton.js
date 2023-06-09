import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import OrderContext from "../../../store/order-context";

const HeaderCartButton = ({ onClick }) => {
	const mealOrderCtx = useContext(OrderContext);

	return (
		<button className={classes.button} onClick={onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{mealOrderCtx.items}</span>
		</button>
	);
};

export default HeaderCartButton;
