import React from "react";
import { motion } from "framer-motion";
import Cardios from "../components/Cardios";
import "../styles/animation.css";
import { v4 } from "uuid";
import { FaReact, FaJs, FaPython, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

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
		{ id: uuid(), skill: "React.js", icon: <FaReact /> },
		{ id: uuid(), skill: "Node.js", icon: <FaNodeJs /> },
		{ id: uuid(), skill: "Python", icon: <FaPython /> },
		{ id: uuid(), skill: "Mongo", icon: <SiMongodb /> },
		{ id: uuid(), skill: "JavaScript", icon: <FaJs /> },
		{ id: uuid(), skill: "Express.js", icon: <SiExpress /> },
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
						<Cardios lang={items.skill} icon={items.icon} />
					</div>
				</motion.li>
			))}
		</motion.ol>
	);
}

export default AnimationLists;
