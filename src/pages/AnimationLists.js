import React from "react";
import { motion } from "framer-motion";
import Cardios from "../components/Cardios";
import "../styles/animation.css";
import { v4 } from "uuid";

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
	//for uuid
	const uuid = () => v4();

	const skills = [
		{ id: uuid(), skill: "JavaScript" },
		{ id: uuid(), skill: "Python" },
		{ id: uuid(), skill: "React.js" },
		{ id: uuid(), skill: "Node.js" },
		{ id: uuid(), skill: "Express.js" },
		{ id: uuid(), skill: "Mongo" },
	];
	//returns skill lists through animation
	return (
		<motion.ol
			variants={container}
			initial="hidden"
			animate="show"
			style={{ listStyleType: "none" }}
			className="card-list"
		>
			{skills.map((items) => (
				<motion.li variants={item} key={items.id}>
					<div className="card">
						<Cardios lang={items.skill} />
					</div>
				</motion.li>
			))}
		</motion.ol>
	);
}

export default AnimationLists;
