import React from "react";
import "../styles/creation.css";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

function Creation() {
	return (
		<motion.div
			className="creation-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			<Carousel />
		</motion.div>
	);
}

export default Creation;
