import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const [cartVisibility, setCartVisibility] = useState(false);
	const openCartHandler = () => {
		setCartVisibility(true);
	};

	const closeCartHandler = (boolean) => {
		setCartVisibility(boolean);
	};

	return (
		<>
			{cartVisibility && <Cart onClick={closeCartHandler} />}
			<Header onOpenCart={openCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
