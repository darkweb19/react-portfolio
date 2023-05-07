import React from "react";
import "../styles/statement.css";
import Cardios from "./Cardios";

function Statement() {
	return (
		<div class="statement-container" data-aos="fade-up">
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
		</div>
	);
}

export default Statement;
