import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidenav.css";

function SideNav() {
	return (
		<div className="side-nav-container">
			<div className="logo">
				<img src="./logo.png" alt="cannot get" />
			</div>
			<div className="nav-links">
				<Link className="links" to="/home">
					/Home
				</Link>
				<Link className="links" to="/education">
					/Education
				</Link>
				<Link className="links" to="/statement">
					/Statement
				</Link>
				<Link className="links" to="/experience">
					/Experience
				</Link>
				<Link className="links" to="/creation">
					/software-creation
				</Link>
			</div>
		</div>
	);
}

export default SideNav;
