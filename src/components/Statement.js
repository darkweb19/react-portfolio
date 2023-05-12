import React from "react";
import "../styles/statement.css";
import image from "../../src/images/my-image.png";
import PersonalStatement from "../pages/PersonalStatement";
import { motion } from "framer-motion";
import AnimationLists from "../pages/AnimationLists";

function Statement() {
	return (
		<motion.div
			className="statement-container"
			data-aos="fade-up"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
			transition={{ ease: "easeOut", duration: 2 }}
		>
			{/* div for personal statement */}
			<PersonalStatement image={image} />
			<div className="skills">
				<h1>Technologies I've been working with :</h1>
				{/* card animation for skills */}
				<AnimationLists />
			</div>
		</motion.div>
	);
}

export default Statement;
