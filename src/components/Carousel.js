import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { v4 } from "uuid";
import dallE from "../images/Dall-E.png";
import ssrPng from "../images/SSR-Blog.png";
import image from "../images/image.png";
import minePort from "../images/portfolio.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import IosShareIcon from "@mui/icons-material/IosShare";
import { motion } from "framer-motion";

function Carousels() {
	const uuid = () => v4;
	const images = [
		{
			id: uuid(),
			image: image,
			name: "A minimal Image Portfolio",
			desc: " ",
			link: "https://github.com/darkweb19/image",
			share: "https://darkweb19.github.io/image/imageGalary/",
		},
		{
			id: uuid(),
			image: dallE,
			name: "Image generator using Dall-E Api",
			desc: " ",
			link: "https://github.com/darkweb19/",
			share: "",
		},
		{
			id: uuid(),
			image: ssrPng,
			name: "A blog using server side rendering",
			desc: " ",
			link: "https://github.com/darkweb19/SSR-Project1",
			share: "",
		},
		{
			id: uuid(),
			image: minePort,
			name: "Website using pure html css and js",
			desc: " ",
			link: "https://github.com/darkweb19/Portfolio-Website",
			share: "https://github.com/darkweb19/Portfolio-Website",
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
					<div className="div-para">
						<motion.div
							className="carousel-links"
							onClick={() => window.open(item.link)}
						>
							<GitHubIcon />
						</motion.div>
						<motion.div
							className="carousel-links"
							onClick={() => window.open(item.share)}
						>
							<IosShareIcon />
						</motion.div>
						<p className="name">{item.name}</p>
					</div>
				</div>
			))}
		</Carousel>
	);
}

export default Carousels;
