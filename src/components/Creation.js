import React from "react";
import "../styles/creation.css";
import { motion } from "framer-motion";

import Carousels from "./Carousel";
// import dalle from "../images/Dall-E.png";

function Creation() {
	return (
		<motion.div
			className="creation-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			<h1>My creations/-</h1>
			<Carousels />
		</motion.div>
	);
}

export default Creation;
