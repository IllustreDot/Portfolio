import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
	const { t } = useTranslation();
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(t("contact.alert", { message }));
	};

	return (
		<div className="p-8 text-gray-900 dark:text-gray-100">
			<h2 className="text-3xl font-bold">{t("contact.title")}</h2>
			<p className="mt-4">{t("contact.intro")}</p>

			{/* Social Media Links */}
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
				<a
					href="https://www.linkedin.com/in/jade-van-brabandt-47681b26b/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center text-white dark:text-black bg-black dark:bg-white p-4 border rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
				>
					<FaLinkedin className="text-blue-600 dark:text-blue-400 text-2xl mr-2" />
					LinkedIn
				</a>
				<a
					href="https://github.com/IllustreDot"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center text-white dark:text-black bg-black dark:bg-white p-4 border rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
				>
					<FaGithub className="text-2xl mr-2" />
					GitHub
				</a>
				<a
					href="mailto:jade.van.brabandt.04@gmail.com"
					className="flex items-center justify-center text-white dark:text-black bg-black dark:bg-white p-4 border rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
				>
					<FaEnvelope className="text-red-600 dark:text-red-400 text-2xl mr-2" />
					Email
				</a>
			</div>
		</div>
	);
};

export default Contact;
