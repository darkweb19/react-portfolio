import "./App.css";
import Layouts from "./layouts/Layouts";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	//automatically redirects to home page if pathname == / so there is no / path in out website
	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/home");
		}
	}, [location, navigate]);

	return (
		<div className="App">
			{/* animate presence is for ease in animation while changing to pages */}
			<AnimatePresence>
				<Layouts />
			</AnimatePresence>
		</div>
	);
}

export default App;
