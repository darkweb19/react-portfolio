import React from "react";
import "../styles/creation.css";
import { motion, easeIn } from "framer-motion";

import Carousels from "./Carousel";
// import dalle from "../images/Dall-E.png";

function Creation() {
	return (
		<motion.div
			className="creation-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: easeIn, duration: 1.5 }}
		>
			<h1>My creations/-</h1>
			<Carousels />
		</motion.div>
	);
}

export default Creation;
