import { useTranslation } from "react-i18next";

const Languages = () => {
	const { t } = useTranslation();

	const languages = [
		{ extra:"",name: t("about.languages.french"), flag: "🇫🇷" },
		{ extra: t("about.languages.extra"), name: t("about.languages.english"), flag: "🇬🇧" },
	];

	return (
		<div>
			<h3 className="text-2xl font-semibold mb-4">{t("about.languagesTitle")}</h3>
			<div className="flex flex-wrap gap-4">
				{languages.map((lang, index) => (
					<div
						key={index}
						className="w-full sm:w-[48%] h-32 rounded-lg shadow-md flex flex-col items-center justify-center dark:text-black dark:bg-white bg-gray-800 text-white text-center gap-2 transition-transform transform hover:scale-105
     box-shadow hover:shadow-lg hover:shadow-gray-500/50 dark:hover:shadow-gray-300/50 hover:rotate-2">
						<span className="text-3xl">{lang.flag}</span>
						<span>{lang.name}</span>
						<span class="text-xs">{lang.extra}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Languages;
