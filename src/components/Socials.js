import React from "react";
import { motion } from "framer-motion";

function Socials({ social, link }) {
	return (
		<>
			<motion.div
				className="social-links"
				onClick={() => window.open(link)}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				style={{ x: 100 }}
			>
				{social}
			</motion.div>
		</>
	);
}

export default Socials;
