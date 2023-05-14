import "./App.css";
import Loaders from "./components/Loaders";
import Layouts from "./layouts/Layouts";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	//setting state for pre loaders
	const [loader, setloader] = useState(true);
	if (loader) {
		setTimeout(() => {
			setloader(false);
		}, 2500);
	}

	//automatically redirects to home page if pathname == / so there is no / path in out website
	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/home");
		}
	}, [location, navigate]);

	return (
		<div className="App">
			{loader ? (
				//this is for loading loaders
				<Loaders />
			) : (
				//main app components
				<AnimatePresence>
					<Layouts />
				</AnimatePresence>
			)}
		</div>
	);
}

export default App;
