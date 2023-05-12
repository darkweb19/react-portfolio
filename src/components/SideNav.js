import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidenav.css";
import { useLocation } from "react-router-dom";
import logo from "../images/mine.png";
import Socials from "./Socials";

function SideNav() {
	const location = useLocation();

	const navLinks = [
		"/Home",
		"/Education",
		"/Statement",
		"/Experience",
		"/Software-creation",
	];

	return (
		<div className="side-nav-container">
			<div className="logo">
				<img src={logo} alt="cannot get" />
			</div>
			<div className="nav-links">
				{/* side nav lists are looped */}
				{navLinks.map((item) => (
					<Link
						location={location}
						className="links"
						to={item.toLowerCase()}
					>
						{item}
					</Link>
				))}
			</div>

			<div className="socials">
				<Socials />
			</div>
		</div>
	);
}

export default SideNav;
