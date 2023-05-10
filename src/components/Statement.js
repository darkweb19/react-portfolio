import React from "react";
import "../styles/statement.css";
import Cardios from "./Cardios";
import { motion } from "framer-motion";
import image from "../../src/images/my-image.png";
function Statement() {
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
		<motion.div
			class="statement-container"
			data-aos="fade-up"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
			transition={{ ease: "easeOut", duration: 2 }}
		>
			<div className="row">
				<div class="statement">
					<h1 class="subtitle">Personal Statement</h1>
					<p>
						I have completed my bootcamp course in the MERN stack
						from{" "}
						<a href="https://deerwalk.edu.np/DWIT/">
							Deerwalk Institute
						</a>{" "}
						. At the same time , I am pursuing by Bachelor's degree
						in Computer Science from St Lawrence College which is
						affiliated to{" "}
						<a href="https://tu.edu.np/">Tribhuwan University</a>
					</p>
				</div>
				<div class="image">
					<img src={image} alt="error" />
				</div>
			</div>
			<div className="skills">
				<h1>Technologies I've been working with :</h1>

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
			</div>
		</motion.div>
	);
}

export default Statement;
