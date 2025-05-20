import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
	const { t } = useTranslation();
	const projects = t("projects.list", { returnObjects: true });

    return (
        <div className="p-8 text-gray-900 dark:text-gray-100">
            <h2 className="text-3xl font-bold">{t("projects.title")}</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
