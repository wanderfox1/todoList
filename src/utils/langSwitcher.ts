import i18n from "i18next";

export const ToggleLang = () => {

    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    console.log(newLang)
    i18n.changeLanguage(newLang)
}