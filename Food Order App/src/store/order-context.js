import { createContext, useState } from "react";

const OrderContext = createContext({
	mealID: "",
	amount: 0,
});

export const OrderContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addToCart = (order) => {
		setCart((prevCart) => {
			return [...prevCart, order];
		});

		console.log(cart);
	};

	return (
		<OrderContext.Provider value={{ addToCart: addToCart, items: cart.length }}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
