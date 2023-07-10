import { createContext, useState } from "react";

const OrderContext = createContext({
	addToCart: () => {},
	addSingleItemToCart: () => {},
	resetCart: () => {},
	removeSingleItemFromCart: () => {},
	items: 0,
	cart: [],
	total: 0,
});

export const OrderContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	let updatedCart = cart;
	let total = 0;

	cart.forEach((item) => {
		total += item.price * item.amount;
	});

	const addToCart = (order) => {
		const alreadyOrderedMeals = cart.map((order) => order.name);

		if (alreadyOrderedMeals.includes(order.name)) {
			const itemIndex = updatedCart.findIndex(
				(item) => item.name === order.name,
			);

			if (Number(updatedCart[itemIndex].amount) + Number(order.amount) <= 5) {
				const newAmount =
					Number(updatedCart[itemIndex].amount) + Number(order.amount);

				updatedCart[itemIndex].amount = newAmount;

				return;
			} else {
				console.log(
					`You can't order more than 5 amounts per meal in one procurement!`,
				);

				return;
			}
		}

		setCart((prev) => [...prev, order]);
	};

	const resetCart = () => {
		setCart([]);
	};

	const addSingleItemToCart = (name) => {
		const itemIndex = updatedCart.findIndex((item) => item.name === name);

		if (updatedCart[itemIndex].amount < 5) {
			updatedCart[itemIndex].amount += 1;
		} else {
			console.log(
				`You can't order more than 5 amounts per meal in one procurement!`,
			);
		}

		setCart(() => [...updatedCart]);

		return updatedCart;
	};

	const removeSingleItemFromCart = (name) => {
		const itemIndex = updatedCart.findIndex((item) => item.name === name);

		if (updatedCart[itemIndex].amount > 1) {
			updatedCart[itemIndex].amount -= 1;
		} else {
			updatedCart = updatedCart.filter((item) => item.name !== name);
		}

		setCart(() => [...updatedCart]);

		return updatedCart;
	};

	return (
		<OrderContext.Provider
			value={{
				addToCart: addToCart,
				resetCart: resetCart,
				addSingleItemToCart: addSingleItemToCart,
				removeSingleItemFromCart: removeSingleItemFromCart,
				items: cart.length,
				cart: cart,
				total: total,
			}}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
