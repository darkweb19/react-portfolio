import React from "react";
import "../styles/home.css";
import { motion, easeIn } from "framer-motion";
import Typewriter from "typewriter-effect";

function Home() {
	return (
		<motion.div
			className="home-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: easeIn, duration: 2 }}
		>
			<div className="intro" onClick={() => console.log("SAy hello")}>
				<h1>
					Hi! , <strong>Sujan</strong> here .
				</h1>
				<div className="typing">
					{/* typing animation */}
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("I create stuff sometimes.")
								.pauseFor(2000)
								.deleteAll()
								.start();
						}}
						options={{
							loop: true,
						}}
					/>
				</div>
				{/* div for about section */}
				<div className="about">
					<div>
						I am a software engineer and student from Nepal. I have
						keen interest in full-stack development , Artificial
						Intelligence , IoT and everything in between.
					</div>
				</div>
				<div className=""></div>
			</div>
		</motion.div>
	);
}
export default Home;
