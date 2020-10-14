import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";
import Header from "./Header";
import resume from "./resume.pdf";
import "./Resume.css";

const Resume = () => {
	const width = useWindowWidth();
	return (
		<div className='resume-root'>
			<div>
				<Header title='Resume' />
			</div>
			<div className='resume-bottom'>
				<a href={resume} download='AdilMian.pdf'>
					<Document file={resume}>
						<Page
							width={Math.min(width * 0.9, 600)}
							pageNumber={1}
						/>
					</Document>
				</a>
			</div>
		</div>
	);
};

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return width;
}

export default Resume;
