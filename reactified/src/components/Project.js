import React from "react";
import "./Project.css";
import image from "./images/projects/cc3k-1.PNG";
import { Card, Image } from "antd";

const Project = props => {
	return (
		<div style={{ padding: 10 }}>
			<Card
				headStyle={titleStyles}
				title='Project Title'
				hoverable
				bordered
				style={{ borderRadius: "15px" }}>
				<div style={bodyStyles}>
					<Image
						style={{ marginLeft: "1vw" }}
						width='30vw'
						src={image}
					/>
					<ul
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							marginTop: "5vh",
						}}>
						<li>
							<p>
								Description 1Description 1Description
								1Description 1
							</p>
						</li>
						<li>
							<p>
								Description 1Description 1Description
								1Description 1
							</p>
						</li>
						<li>
							<p>
								Description 1Description 1Description
								1Description 1
							</p>
						</li>
					</ul>
				</div>
			</Card>
		</div>
	);
};

const titleStyles = {
	fontWeight: "bold",
	fontFamily: "Helvetica",
	fontSize: "3em",
};

const bodyStyles = {
	display: "flex",
	flexDirection: "column",
};

export default Project;
