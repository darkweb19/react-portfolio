import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidenav.css";
import { useLocation } from "react-router-dom";
import logo from "../images/mine.png";
import Socials from "./Socials";
import { v4 } from "uuid";

function SideNav() {
	const location = useLocation();
	const uuid = () => v4();

	const navLinks = [
		{ id: uuid(), link: "/Home" },
		{ id: uuid(), link: "/Education" },
		{ id: uuid(), link: "/Statement" },
		{ id: uuid(), link: "/Experience" },
		{ id: uuid(), link: "/Software-creation" },
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
						key={item.id}
						location={location}
						className="links"
						to={item.link.toLowerCase()}
					>
						{item.link}
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
