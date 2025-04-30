import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from './app/en.json'
import ruTranslations from './app/ru.json'

const resources = {
    en: {
        translation: enTranslations,
    },
    ru: {
        translation: ruTranslations,
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;