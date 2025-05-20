import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ darkMode, setDarkMode }) => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const { i18n, t } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "fr" ? "en" : "fr";
		i18n.changeLanguage(newLang);
	};

	return (
		<nav
			className={`fixed left-1/2 transform ${
				isHome
					? "top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
					: "top-0 -translate-x-1/2 rounded-b-lg"
			} transition-all duration-500 bg-[#1e1e1e] dark:bg-[#ff9500] text-white dark:text-gray-900 p-4 w-1/4 z-50 flex items-center`}
		>
			<div className="flex justify-between items-center h-full w-full">
				<ul className="flex justify-center items-center space-x-8">
					<li>
						<div className="hover:-rotate-6 transition-transform duration-300">
							<Link
								to="/"
								className="hover:text-blue-500 dark:hover:text-blue-300"
							>
								{t("navbar.home")}
							</Link>
						</div>
					</li>
					<li>
						<div className="hover:-rotate-6 transition-transform duration-300">
							<Link
								to="/about"
								className="hover:text-blue-500 dark:hover:text-blue-300"
							>
								{t("navbar.about")}
							</Link>
						</div>
					</li>
					<li>
						<div className="hover:-rotate-6 transition-transform duration-300">
							<Link
								to="/projects"
								className="hover:text-blue-500 dark:hover:text-blue-300"
							>
								{t("navbar.projects")}
							</Link>
						</div>
					</li>
					<li>
						<div className="hover:-rotate-6 transition-transform duration-300">
							<Link
								to="/contact"
								className="hover:text-blue-500 dark:hover:text-blue-300"
							>
								{t("navbar.contact")}
							</Link>
						</div>
					</li>
				</ul>
				<div className="flex items-center space-x-6">
					{/* Dark mode toggle */}
					<button
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded transition-colors duration-500"
					>
						{darkMode ? "☀️" : "🌙"}
					</button>
					{/* Language toggle */}
					<button
						onClick={toggleLanguage}
						className="bg-white dark:bg-white text-gray-800 dark:text-gray-900 p-2 rounded shadow transition-colors duration-500"
					>
						{i18n.language === "fr" ? "🇫🇷" : "🇺🇸"}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
