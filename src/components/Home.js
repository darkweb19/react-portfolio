import React from "react";
import "../styles/home.css";
import { motion, easeIn } from "framer-motion";
import Typewriter from "typewriter-effect";

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
				<h1>
					Hi! , <strong>Sujan</strong> here .
				</h1>
				<p>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("I create stuff sometimes.")
								.callFunction(() => {
									console.log("String typed out!");
								})
								.pauseFor(2000)
								.deleteAll()
								.start();
						}}
						options={{
							loop: true,
						}}
					/>
				</p>
				<div className="about">
					<div>
						I am a software engineer and student from Nepal. I have
						keen interest in full-stack development , Artificial
						Intelligence , IoT and everything in between.
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Home;
