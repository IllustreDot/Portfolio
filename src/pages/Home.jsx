import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col justify-center items-center text-center px-8 flex-grow pt-48 text-gray-900 dark:text-gray-100 fade-in">
			<h1 className="text-4xl font-bold">{t("home.title")}</h1>
			<p className="mt-8 text-lg">{t("home.subtitle")}</p>
		</div>
	);
};

export default Home;
