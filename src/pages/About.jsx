import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();

	return (
		<div className="p-8 text-gray-900 dark:text-gray-100">
			<h2 className="text-3xl font-bold">{t("about.title")}</h2>
			<p className="mt-4 text-lg">{t("about.description")}</p>
			<div className="mt-6">
				<h3 className="text-2xl font-semibold">{t("about.skillsTitle")}</h3>
				<ul className="mt-2 list-disc list-inside">
					{t("about.skills", { returnObjects: true }).map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="mt-6">
				<h3 className="text-2xl font-semibold">{t("about.languagesTitle")}</h3>
				<ul className="mt-2 list-disc list-inside">
					<li>{t("about.languages.french")}</li>
					<li>{t("about.languages.english")}</li>
				</ul>
			</div>
			<div className="mt-6">
				<h3 className="text-2xl font-semibold">{t("about.interestsTitle")}</h3>
				<ul className="mt-2 list-disc list-inside">
					<li>{t("about.interests.animation")}</li>
					<li>{t("about.interests.mmorpg")}</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
