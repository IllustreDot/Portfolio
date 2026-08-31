import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
	const [darkMode, setDarkMode] = useState(() => {
		// Lire le mode depuis le cookie ou utiliser false par défaut
		return Cookies.get("darkMode") === "true";
	});

	// Appliquer ou retirer la classe "dark" sur l'élément <html>
	useEffect(() => {
		const htmlElement = document.documentElement;
		if (darkMode) {
			htmlElement.classList.add("dark");
		} else {
			htmlElement.classList.remove("dark");
		}
		// Stocker le mode dans un cookie
		Cookies.set("darkMode", darkMode, { expires: 365 });
	}, [darkMode]);

	return (
		<Router basename={import.meta.env.MODE === "production" ? "/" : "/"}>
			{" "}
			<div className="relative flex flex-col min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
				{/* Background Waves */}
				<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-gray-100 dark:bg-gray-900">
					<div className="wave wave-1"></div>
					<div className="wave wave-2"></div>
				</div>

				<div className="flex flex-col min-h-screen">
					{/* Navbar */}
					<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
					{/* Content */}
					<div className="flex-grow">
						{/* Animated Routes */}
						<AnimatedRoutes />
					</div>
					{/* Footer */}
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default App;
