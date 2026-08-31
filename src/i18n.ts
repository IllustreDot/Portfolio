import Cookies from "js-cookie";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

export const supportedLanguages = ["en", "fr"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const normalizeLanguage = (language?: string | null): SupportedLanguage => {
	const normalized = language?.toLowerCase().split("-")[0];

	if (normalized && supportedLanguages.includes(normalized as SupportedLanguage)) {
		return normalized as SupportedLanguage;
	}

	return "en";
};

const getInitialLanguage = (): SupportedLanguage => {
	if (typeof window !== "undefined") {
		const cookieLanguage = Cookies.get("i18nextLng") || Cookies.get("locale");
		if (cookieLanguage) {
			return normalizeLanguage(cookieLanguage);
		}

		return normalizeLanguage(window.navigator.language);
	}

	return "en";
};

const persistLanguage = (language: string | undefined) => {
	const normalizedLanguage = normalizeLanguage(language);

	Cookies.set("i18nextLng", normalizedLanguage, { expires: 365 });

	if (typeof document !== "undefined") {
		document.documentElement.lang = normalizedLanguage;
	}
};

export const changeLanguage = (language: SupportedLanguage) => {
	const normalizedLanguage = normalizeLanguage(language);
	void i18n.changeLanguage(normalizedLanguage);
	persistLanguage(normalizedLanguage);
	return normalizedLanguage;
};

export const toggleLanguage = () => {
	const nextLanguage = i18n.resolvedLanguage === "fr" ? "en" : "fr";
	return changeLanguage(nextLanguage as SupportedLanguage);
};

const initialLanguage = getInitialLanguage();

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: en },
		fr: { translation: fr },
	},
	lng: initialLanguage,
	fallbackLng: "en",
	supportedLngs: supportedLanguages,
	interpolation: {
		escapeValue: false,
	},
});

i18n.on("languageChanged", persistLanguage);

export default i18n;
