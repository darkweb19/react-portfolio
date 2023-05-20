import React from "react";
import "../styles/loader.css";
import { ClipLoader } from "react-spinners";

function Loaders() {
	return (
		<div className="loader">
			<ClipLoader
				color="#64ffda"
				size={60}
				speedMultiplier={0.5}
				cssOverride={{
					alignItems: "center",
					justifyContent: "center",
				}}
			/>
		</div>
	);
}

export default Loaders;
