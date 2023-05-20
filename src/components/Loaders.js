import React from "react";
import "../styles/loader.css";
import { useMediaQuery } from "react-responsive";
import Windows from "../pages/Windows";

function Loaders() {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return <>{isMobile ? <Windows size="7" /> : <Windows size="8" />}</>;
}

export default Loaders;
