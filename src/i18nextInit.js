import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./assets/locales/en/translation.json";
import translationTr from "./assets/locales/tr/translation.json";

const fallbackLng = ["tr"];
const availableLanguages = [ "tr","en"];

const resources = {
  en: {
    translation: translationEN,
  },

  tr: {
    translation: translationTr,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;