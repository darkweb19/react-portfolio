import React from "react";
import { motion } from "framer-motion";
import Cardios from "../components/Cardios";

function AnimationLists() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	const skills = [
		"JavaScript",
		"Python",
		"React.js",
		"Node.js",
		"Express.js",
		"Mongo",
	];

	return (
		<motion.ol
			variants={container}
			initial="hidden"
			animate="show"
			style={{ listStyleType: "none" }}
			className="card-list"
		>
			{skills.map((items) => (
				<motion.li variants={item}>
					<div className="card">
						<Cardios lang={items} />
					</div>
				</motion.li>
			))}
		</motion.ol>
	);
}

export default AnimationLists;
