import React from "react";
import "../styles/copyright.css";

function CopyRight() {
	return (
		<div className="copyright">
			<div className="openSource">
				Source code to this project is{" "}
				<a href="https://github.com/darkweb19/react-portfolio">here</a>
			</div>
			<div className="rightname">
				Built and Designed by Sujan Shrestha.
			</div>
			<div className="rights">All Rights Reserved. ©</div>
		</div>
	);
}

export default CopyRight;
