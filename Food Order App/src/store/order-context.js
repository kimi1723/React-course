import { createContext, useState } from "react";

const OrderContext = createContext({
	addToCart: () => {},
	items: 0,
	cart: [],
});

export const OrderContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (order) => {
		setCart((prev) => [...prev, order]);
	};

	return (
		<OrderContext.Provider
			value={{ addToCart: addToCart, items: cart.length, cart: cart }}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
