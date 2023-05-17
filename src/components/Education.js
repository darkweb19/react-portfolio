import React from "react";
import "../styles/education.css";
import { motion } from "framer-motion";

function Education() {
	const educationData = [
		{
			time: {
				start: "March 2006",
				end: "April 2018",
			},
			levels: "Primary to Secondary Schooling",
			place: "Little Flower Sec School ",
			desc: "	Successfully passed Secondary Education Examination SEE held by Ministry of Education , Nepal with Grade Point Average of 3.35.",
		},
		{
			time: {
				start: "July 20018",
				end: "March 2020",
			},
			levels: "Imtermediate in Science",
			place: "Himalayan Pyramic Higher Seconday School ",
			desc: "Successfully passed Higher Secondary Education Examination held by NEB , Nepal with Grade Point Average of 3.19.",
		},
		{
			time: {
				start: "July 2020",
				end: "Current...",
			},
			levels: "St Lawrence College ",
			place: "Little Flower Sec School ",
			desc: "Currently  I am studying my Bachelor's Degree in Computer Science and Infortmation Technology  in Tribhuwan University.",
		},
	];
	return (
		<motion.div
			className="education-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.3 } }}
			exit={{ opacity: 0 }}
		>
			<div className="education">
				<h1>Educations /-</h1>
				<div className="education-section">
					{educationData.map((item) => (
						<div className="education-row">
							<div className="duration">
								{item.time.start}
								<br />
								{item.time.end}
							</div>
							<div className="college">
								<h4> {item.levels}</h4>
								<h5>{item.place}</h5>
								<p>{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default Education;
