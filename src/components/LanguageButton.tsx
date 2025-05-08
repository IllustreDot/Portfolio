import React from "react";
import { useTranslation } from "react-i18next";

const LanguageButton: React.FC = () => {
	const { i18n, t } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "en" ? "fr" : "en";
		i18n.changeLanguage(newLang);
	};

	return <button onClick={toggleLanguage}>{t("language")}</button>;
};

export default LanguageButton;
