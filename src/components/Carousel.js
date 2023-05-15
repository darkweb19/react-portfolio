import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { v4 } from "uuid";
import dallE from "../images/Dall-E.png";
import ssrPng from "../images/SSR-Blog.png";
import minePort from "../images/portfolio.png";
import Socials from "./Socials";
import GitHubIcon from "@mui/icons-material/GitHub";

function Carousels() {
	const uuid = () => v4;
	const images = [
		{
			id: uuid(),
			image: minePort,
			name: "Website using pure html css and js",
			desc: " ",
			link: "https://github.com/darkweb19/Portfolio-Website",
		},
		{
			id: uuid(),
			image: dallE,
			name: "Image generator using Dall-E Api",
			desc: " ",
			link: "https://github.com/darkweb19/",
		},
		{
			id: uuid(),
			image: ssrPng,
			name: "A blog using server side rendering",
			desc: " ",
			link: "https://github.com/darkweb19/SSR-Project1",
		},
	];
	return (
		<Carousel
			showArrows={true}
			autoPlay={true}
			infiniteLoop={true}
			className="carousel-container"
		>
			{images.map((item) => (
				<div className="carousel-items" key={item.id}>
					<img src={item.image} alt="nothing" />
					<p>
						<Socials
							className="social-links carousel"
							social={
								<GitHubIcon
									sx={{ fontSize: 30 }}
									color="primary"
								/>
							}
							link={item.link}
						/>
						{item.name}
					</p>
				</div>
			))}
		</Carousel>
	);
}

export default Carousels;
