import React from "react";
import "./Me.css";
import Header from "./Header";
import image from "./images/profile.jpg";
import { Card, Image } from "antd";

const Me = () => {
	return (
		<div className='resume-root'>
			<div>
				<Header title='About Adil' />
			</div>
			<div className='me-card'>
				<Card
					hoverable
					bordered
					style={{
						borderRadius: "15px",
						boxShadow: "15px 15px 60px",
					}}>
					<div style={bodyStyles}>
						<img
							style={{ width: 450, borderRadius: 10 }}
							src={image}
						/>

						<ul
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								marginTop: "5vh",
								maxWidth: "60vw",
							}}>
							<p className='me-text'>
								I am an engineer at heart. I like to build
								meaningful products that are impactful and make
								our lives easier (even if it is slighty so).
								Apart from this, I am also learning UI/UX
								Design.
							</p>
							<p className='me-text'>
								I am an extremely driven and resilient
								individual. One of the biggest challenges I
								faced was fighting a Leaukemia diagnosis in
								Summer 2015. After two years, I came out a
								better person, with more gratitude, grit and
								renowned motivation to pursue my goals!
							</p>
							<p className='me-text'>
								When I'm not writing code, I can be found
								playing guitar, the latest iteration of
								Battlefield or being snobby with coffee.
							</p>
							<p className='me-text'>Connect with me!</p>
						</ul>
					</div>
				</Card>
			</div>
		</div>
	);
};

const bodyStyles = {
	marginTop: "1%",
	display: "flex",
	maxWidth: "80vw",
	borderRadius: "15px",
};

export default Me;
