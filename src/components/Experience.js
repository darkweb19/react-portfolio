import React from "react";
import { motion } from "framer-motion";

function Experience() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			Experience
		</motion.div>
	);
}

export default Experience;
