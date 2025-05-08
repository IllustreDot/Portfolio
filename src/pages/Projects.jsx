import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t } = useTranslation();
	const projects = t("projects.list", { returnObjects: true });

	return (
		<div className="p-8 text-gray-900 dark:text-gray-100">
			<h2 className="text-3xl font-bold">{t("projects.title")}</h2>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project, index) => (
					<div
						key={index}
						className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						<h3 className="text-xl font-semibold">{project.title}</h3>
						<p className="mt-2">{project.description}</p>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
							{t("projects.technologies")}: {project.technologies}
						</p>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
							{t("projects.languages")}: {project.languages}
						</p>
						<a
							href={project.link}
							className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-4 inline-block"
						>
							{t("projects.viewProject")}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
