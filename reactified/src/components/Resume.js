import React from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";
import Header from "./Header";
import resume from "./resume.pdf";
import "./Resume.css";

const Resume = () => {
	return (
		<div className='resume-root'>
			<div className='resume-header'>
				<Header title='Resume' />
			</div>
			<div className='resume-bottom'>
				<a href={resume} download='AdilMian.pdf'>
					<Document file={resume}>
						<Page pageNumber={1} />
					</Document>
				</a>
			</div>
		</div>
	);
};

export default Resume;
