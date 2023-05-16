import React from "react";
import "../styles/home.css";
import { motion, easeIn } from "framer-motion";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import gmailData from "../assets/80091-gmail-icon.json";

function Home() {
	function changeMailIcon() {
		window.location.href = "mailto:sujanstha3220@gmail.com";
	}

	return (
		<motion.div
			className="home-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: easeIn, duration: 2 }}
		>
			<h1>Home /-</h1>
			<div className="intro" onClick={() => console.log("SAy hello")}>
				<h1>
					Hi! , <strong>Sujan</strong> here.
				</h1>
				<div className="typing">
					{/* typing animation */}
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("I create stuff sometimes.")
								.pauseFor(2000)
								.start();
						}}
					/>
				</div>
				{/* div for about section */}
				<div className="about">
					<div className="about-section">
						I am a software engineer and student from Nepal. I have
						keen interest in full-stack development , Artificial
						Intelligence , IoT and everything in between.
					</div>

					<div className="gmail">
						<Lottie
							animationData={gmailData}
							onClick={() => changeMailIcon()}
							style={{
								height: "100%",
								width: "100%",
								backgroundColor: "transparent",
							}}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
export default Home;
