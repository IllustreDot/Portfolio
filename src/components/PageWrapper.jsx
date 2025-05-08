import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageWrapper = ({ children }) => {
	const [isHome, setIsHome] = useState(true);
	const location = useLocation();

	useEffect(() => {
		setIsHome(location.pathname === "/");
	}, [location]);

	return (
		<div
			className={`transition-all duration-500 ${
				isHome ? "bg-home" : "bg-other"
			}`}
		>
			{/* Fournir l'état de la page active aux enfants */}
			{React.Children.map(children, (child) =>
				React.cloneElement(child, { isHome })
			)}
		</div>
	);
};

export default PageWrapper;
