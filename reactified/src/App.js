import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Me from "./components/Me";
import Project from "./components/Project";
import { HashRouter, Route } from "react-router-dom";

function App() {
	return (
		<HashRouter>
			<Route exact path='/' component={Project} />
			<Route exact path='/projects' component={Projects} />
			<Route exact path='/resume' component={Resume} />
			<Route exact path='/me' component={Me} />
		</HashRouter>
	);
}

export default App;
