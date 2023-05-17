import { createHashRouter } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Statement from "./components/Statement";
import Creation from "./components/Creation";
import App from "./App";

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/education",
				element: <Education />,
			},
			{
				path: "/experience",
				element: <Experience />,
			},
			{
				path: "/software-creation",
				element: <Creation />,
			},
			{
				path: "/statement",
				element: <Statement />,
			},
		],
	},
]);

export default router;
