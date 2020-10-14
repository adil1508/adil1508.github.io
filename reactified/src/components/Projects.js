import React from "react";
import "./Projects.css";
import Header from "./Header";
import logo from "../logo.svg";

const Projects = () => {
	return (
		<div>
			<Header title='Projects' />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<img src={logo} className='App-logo' alt='logo' />;
				<h1 style={{ alignSelf: "center", fontFamily: "Helvetica" }}>
					Under Construction
				</h1>
			</div>
		</div>
	);
};

export default Projects;
