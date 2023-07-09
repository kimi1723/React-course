import { createContext, useState } from "react";

const OrderContext = createContext({
	addToCart: () => {},
	addSingleItemToCart: () => {},
	removeSingleItemFromCart: () => {},
	items: 0,
	cart: [],
});

export const OrderContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (order) => {
		setCart((prev) => [...prev, order]);
	};

	const removeSingleItemFromCart = (e, name) => {
		const updatedCart = cart.filter((item) => item.name != name);
		const foundItem = cart
			.filter((item) => item.name === name)
			.map((item) => +item.amount - 1);
		// const updatedItem =
	};

	return (
		<OrderContext.Provider
			value={{
				addToCart: addToCart,
				removeSingleItemFromCart: removeSingleItemFromCart,
				items: cart.length,
				cart: cart,
			}}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
