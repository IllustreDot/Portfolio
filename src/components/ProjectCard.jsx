import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageSlider from "./ImageSlider"; // Assuming ImageSlider is a new component for the image slide

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    const handleCardClick = () => {
        setIsSliderOpen(true);
    };

    const handleCloseSlider = () => {
        setIsSliderOpen(false);
    };

    return (
        <div>
            <div
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                onClick={handleCardClick}
            >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {t("projects.clickToView")}
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
            {isSliderOpen && (
                <ImageSlider images={project.images} onClose={handleCloseSlider} />
            )}
        </div>
    );
};

export default ProjectCard;