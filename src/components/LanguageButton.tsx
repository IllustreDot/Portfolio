import React from "react";
import { useTranslation } from "react-i18next";
import { toggleLanguage } from "../i18n";

const LanguageButton: React.FC = () => {
	const { t } = useTranslation();

	return <button onClick={() => toggleLanguage()}>{t("language")}</button>;
};

export default LanguageButton;
