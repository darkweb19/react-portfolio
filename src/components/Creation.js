import React from "react";
import "../styles/creation.css";
import { motion } from "framer-motion";

function Creation() {
	return (
		<motion.div
			className="creation-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			Creations of Software
		</motion.div>
	);
}

export default Creation;
