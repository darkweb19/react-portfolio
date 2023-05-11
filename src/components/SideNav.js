import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidenav.css";
import { useLocation } from "react-router-dom";
import logo from "../images/mine.png";
import Socials from "./Socials";

function SideNav() {
	const location = useLocation();

	return (
		<div className="side-nav-container">
			<div className="logo">
				<img src={logo} alt="cannot get" />
			</div>
			<div className="nav-links">
				<Link location={location} className="links" to="/home">
					/Home
				</Link>
				<Link location={location} className="links" to="/education">
					/Education
				</Link>
				<Link location={location} className="links" to="/statement">
					/Statement
				</Link>
				<Link location={location} className="links" to="/experience">
					/Experience
				</Link>
				<Link location={location} className="links" to="/creation">
					/software-creation
				</Link>
			</div>

			<div className="socials">
				<Socials />
			</div>
		</div>
	);
}

export default SideNav;
