import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Particles from "react-particles-js";
import "./Home.css";

const ColorButton = withStyles(() => ({
	root: {
		color: "#fff",
		margin: "0.5em",
		paddingInline: "1em",
		width: "10em",
		fontFamily: "Helvetica",
		fontSize: "1vw",
		"&:hover": {
			backgroundColor: "#1D2C34",
		},
	},
}))(Button);

const Home = () => {
	return (
		<div className='root-container'>
			<div style={{ position: "absolute" }}>
				<Particles
					width='99vw'
					height='99vh'
					params={{
						particles: {
							number: {
								value: 100,
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: "attract",
								},
							},
						},
					}}
				/>
			</div>
			<div className='main-text-container'>
				<p className='main-text'>hi, i'm adil</p>
				<p className='main-text'>i like to code</p>
			</div>
			<div className='navigation'>
				<ColorButton>Projects</ColorButton>
				<ColorButton>Resume</ColorButton>
				<ColorButton>Me</ColorButton>
			</div>
		</div>
	);
};

export default Home;
