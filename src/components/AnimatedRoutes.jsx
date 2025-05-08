import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<div className="relative">
			<div
				key={location.key}
				className="fade-in-out transition-opacity duration-500"
			>
				<Routes location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
};

export default AnimatedRoutes;
