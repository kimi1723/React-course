import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { OrderContextProvider } from "./store/order-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<OrderContextProvider>
		<App />
	</OrderContextProvider>,
);
