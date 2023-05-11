import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CoffeeIcon from "@mui/icons-material/Coffee";

function Socials() {
	return (
		<>
			<motion.div
				className="social-links"
				onClick={() => window.open("https://github.com/darkweb19")}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				style={{ x: 100 }}
			>
				<GitHubIcon sx={{ fontSize: 30 }} color="primary" />
			</motion.div>

			<motion.div
				className="social-links"
				onClick={() =>
					window.open(
						"https://www.linkedin.com/in/sujan-shrestha3220/"
					)
				}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				style={{ x: 100 }}
			>
				<LinkedInIcon sx={{ fontSize: 30 }} color="primary" />
			</motion.div>

			<motion.div
				className="social-links"
				onClick={() => window.open("https://instagram.com/sujansthaa")}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				style={{ x: 100 }}
			>
				<InstagramIcon sx={{ fontSize: 30 }} color="primary" />
			</motion.div>

			<motion.div
				className="social-links"
				onClick={() => window.open()}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				style={{ x: 100 }}
			>
				<CoffeeIcon sx={{ fontSize: 30 }} color="primary" />
			</motion.div>
		</>
	);
}

export default Socials;
