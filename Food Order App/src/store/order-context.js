import { createContext, useState } from "react";

const OrderContext = createContext({
	mealID: "id",
	amount: 3,
	setAmount: (amount) => {
		console.log(amount);
	},
});

export const OrderContextProvider = () => {
	const handleA = (e) => {
		console.log("asdasas");
	};

	return (
		<OrderContext.Provider
			value={{
				setA: handleA,
			}}></OrderContext.Provider>
	);
};

export default OrderContext;
