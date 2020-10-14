import React from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { HashRouter, Route } from "react-router-dom";

function App() {
	return (
		<HashRouter>
			<Route exact path='/' component={Home} />
			<Route exact path='/projects' component={Projects} />
		</HashRouter>
	);
}

export default App;
