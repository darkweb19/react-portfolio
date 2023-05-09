import React from "react";
import "../styles/card.css";
import { easeInOut, motion } from "framer-motion";

function Cardios({ lang, sec }) {
	return (
		<motion.div
			className="container"
			initial={{ opacity: 0 }}
			transition={{ duration: 2, ease: easeInOut }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h4>{lang}</h4>
		</motion.div>
	);
}

export default Cardios;
