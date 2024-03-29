import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidenav.css";
import logo from "../images/mine.png";
import Socials from "./Socials";
import { v4 } from "uuid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CopyRight from "./CopyRight";

function SideNav() {
	const location = useLocation();
	const uuid = () => v4();

	const navLinks = [
		{ id: uuid(), link: "/Home" },
		{ id: uuid(), link: "/Education" },
		{ id: uuid(), link: "/Statement" },
		{ id: uuid(), link: "/Experience" },
		{ id: uuid(), link: "/Creations" },
	];

	const socials = [
		{
			social: <GitHubIcon sx={{ fontSize: 30 }} color="primary" />,
			link: "https://github.com/darkweb19",
		},
		{
			social: <LinkedInIcon sx={{ fontSize: 30 }} color="primary" />,
			link: "https://www.linkedin.com/in/sujan-shrestha3220/",
		},
		{
			social: <InstagramIcon sx={{ fontSize: 30 }} color="primary" />,
			link: "https://instagram.com/sujansthaa/",
		},
		{
			social: <CoffeeIcon sx={{ fontSize: 30 }} color="primary" />,
			link: "https://https://www.buymeacoffee.com/woofoo",
		},
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
			{/* for follow up links */}
			<div className="socials">
				{socials.map((item, index) => (
					<Socials
						key={index}
						social={item.social}
						link={item.link}
					/>
				))}
			</div>

			<CopyRight />
		</div>
	);
}

export default SideNav;
