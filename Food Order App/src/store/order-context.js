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
		setCart((prevCart) => {
			const itemIndex = prevCart.findIndex((item) => item.name === name);
			if (prevCart[itemIndex].amount > 0) {
				prevCart[itemIndex].amount -= 1;
			} else {
				console.log(`You can't order negative amounts of food!`);
				return prevCart;
			}
			return prevCart;
		});
		return cart;
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
