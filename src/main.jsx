import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Provider is what makes the Redux store available to every component
// in the tree via hooks (useSelector / useDispatch), without manually
// passing it down through props ("prop drilling").
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
