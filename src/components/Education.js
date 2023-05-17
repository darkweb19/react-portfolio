import React from "react";
import "../styles/education.css";
import { motion } from "framer-motion";

function Education() {
	return (
		<motion.div
			className="education-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			<h1>Educations /-</h1>
			<div className=""></div>
		</motion.div>
	);
}

export default Education;
