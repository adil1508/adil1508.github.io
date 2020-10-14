import React from "react";
import Particles from "react-particles-js";
import "./Header.css";

const Header = props => {
	return (
		<div className='header-root'>
			<div
				style={{
					position: "absolute",
				}}>
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
								onHover: {
									enable: true,
									mode: "attract",
								},
							},
						},
					}}
				/>
			</div>
			<h1 className='header-title'>{props.title}</h1>
		</div>
	);
};

export default Header;
