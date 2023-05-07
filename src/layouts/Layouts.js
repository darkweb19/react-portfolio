import React from "react";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";

function Layouts() {
	return (
		<div className="layout-container">
			<SideNav />
			<Outlet />
		</div>
	);
}

export default Layouts;
