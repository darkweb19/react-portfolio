import "./App.css";
import Layouts from "./layouts/Layouts";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";

function App() {
	return (
		<div className="App">
			<AnimatePresence>
				<Layouts />
			</AnimatePresence>
		</div>
	);
}

export default App;
