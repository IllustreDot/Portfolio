import { useTranslation } from "react-i18next";
import { useState } from "react";

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
			<form onSubmit={handleSubmit} className="mt-6">
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder={t("contact.placeholder")}
					className="w-full h-32 p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100"
				></textarea>
				<button
					type="submit"
					className="mt-4 bg-blue-500 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-300 text-white py-2 px-6 rounded"
				>
					{t("contact.submit")}
				</button>
			</form>
		</div>
	);
};

export default Contact;
