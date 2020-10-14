import React from "react";
import Header from "./Header";
import "./Resume.css";

const Resume = () => {
	return (
		<div className='resume-root'>
			<div className='resume-header'>
				<Header title='Resume' />
			</div>
			<div className='resume-bottom'></div>
		</div>
	);
};

export default Resume;
