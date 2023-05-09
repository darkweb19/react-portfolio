import React from "react";
import "../styles/statement.css";
import Cardios from "./Cardios";
import { motion } from "framer-motion";

function Statement() {
	return (
		<motion.div
			class="statement-container"
			data-aos="fade-up"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
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
					<img src="/my-image.png" alt="error" />
				</div>
			</div>
			<div className="skills">
				<h1>Technologies I've been working with :</h1>
				<div className="cards">
					<Cardios lang="JavaScript" />
					<Cardios lang="Python" />
					<Cardios lang="React.js" />
					<Cardios lang="Node.js" />
					<Cardios lang="Expres.js" />
					<Cardios lang="MongoDb" />
				</div>
			</div>
		</motion.div>
	);
}

export default Statement;
