import React from "react";

function PersonalStatement({ image }) {
	return (
		<div className="row">
			<div className="statement">
				<h1 className="subtitle">Personal Statement</h1>
				<p>
					I have completed my bootcamp course in the MERN stack from{" "}
					<a href="https://deerwalk.edu.np/DWIT/">
						Deerwalk Institute
					</a>{" "}
					. At the same time , I am pursuing by Bachelor's degree in
					Computer Science from St Lawrence College which is
					affiliated to{" "}
					<a href="https://tu.edu.np/">Tribhuwan University</a>
				</p>
			</div>
			<div className="image">
				<img src={image} alt="error" />
			</div>
		</div>
	);
}

export default PersonalStatement;
