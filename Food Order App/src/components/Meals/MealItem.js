import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<p className={classes.description}>{description}</p>
				<p className={classes.price}>${price}</p>
			</div>
			<MealItemForm id={id} price={price} name={name} />
		</li>
	);
};

export default MealItem;
