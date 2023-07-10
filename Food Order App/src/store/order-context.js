import { createContext, useState } from "react";

const OrderContext = createContext({
	addToCart: () => {},
	addSingleItemToCart: () => {},
	resetCart: () => {},
	removeSingleItemFromCart: () => {},
	items: 0,
	cart: [],
});

export const OrderContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (order) => {
		setCart((prev) => [...prev, order]);
	};

	const resetCart = () => {
		setCart([]);
	};

	const removeSingleItemFromCart = (e, name) => {
		const updatedCart = cart;
		const itemIndex = updatedCart.findIndex((item) => item.name === name);
		if (updatedCart[itemIndex].amount > 0) {
			updatedCart[itemIndex].amount -= 1;
		} else {
			console.log(`You can't order negative amounts of food!`);
		}

		setCart(() => [...updatedCart]);

		return updatedCart;
	};

	return (
		<OrderContext.Provider
			value={{
				addToCart: addToCart,
				resetCart: resetCart,
				removeSingleItemFromCart: removeSingleItemFromCart,
				items: cart.length,
				cart: cart,
			}}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
