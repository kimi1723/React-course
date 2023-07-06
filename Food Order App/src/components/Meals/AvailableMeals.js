import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../../assets/dummy-meals";
import MealItem from "./MealItem";
import Card from "../UI/Card/Card";
import OrderContext from "../../store/order-context";

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => {
		return (
			<MealItem
				key={meal.id}
				id={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
