import React from "react";
import "../styles/card.css";
import { motion } from "framer-motion";

function Cardios({ lang, icon }) {
	return (
		<motion.div
			className="container"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<h3> {icon} </h3>
			<h4>{lang}</h4>
		</motion.div>
	);
}

export default Cardios;
