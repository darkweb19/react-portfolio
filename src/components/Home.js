import React from "react";
import "../styles/home.css";
import { motion, easeIn } from "framer-motion";

function Home() {
	return (
		<motion.div
			className="home-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 2 } }}
			exit={{ opacity: 0 }}
			transition={{ ease: easeIn, duration: 2 }}
		>
			<div className="intro">
				<h1>Hey , Sujan here .</h1>
				<p>I create stuffs sometimes</p>
			</div>
		</motion.div>
	);
}

export default Home;
