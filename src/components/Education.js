import React from "react";
import { motion } from "framer-motion";

function Education() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			Education
		</motion.div>
	);
}

export default Education;
