import { useTranslation } from "react-i18next";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Interests from "../components/Interests";
import Section from "../components/Section";

const About = () => {
	const { t } = useTranslation();

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="mt-[4.6rem] shadow-lg border rounded-lg p-6 max-w-4xl w-full text-gray-900 dark:text-gray-100 fade-in">
				{/* Photo Section */}
				<div className="mb-6 text-center">
					<img
						src="media/me.png"
						alt="Profile"
						className="w-32 h-32 rounded-full object-contain mx-auto border-2 border-gray-300 dark:border-gray-700 shadow-lg"
					/>
					<h2 className="text-xl font-semibold mt-4">{t("about.title")}</h2>
					<p className="mt-2">{t("about.description")}</p>
				</div>

				{/* Skills Section */}
				<Skills />
				{/* Competence Section */}
				<Section>
					<Languages />
				</Section>
				{/* Interests Section */}
				<Section>
					<Interests />
				</Section>
			</div>
		</div>
	);
};

export default About;
