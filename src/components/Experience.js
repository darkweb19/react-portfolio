import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

function Experience() {
	return (
		<motion.div
			className="experience-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			<h1>Experience /-</h1>
			<div className="hire">
				<h1>
					<span>Hire</span> me for having experience :)
				</h1>
			</div>
		</motion.div>
	);
}

export default Experience;
