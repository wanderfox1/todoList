import {useTranslation} from "react-i18next";
import {ToggleLang} from "../utils/langSwitcher.ts";
import i18n from "i18next";

export const Header = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className="flex justify-center items-center gap-15 bg-orange-300 w-full h-14">
                <h1 className="text-blue-600 text-center">
                    {t("Welcome")}
                </h1>
                <button className="border border-black-600 w-25 h-10 rounded-2xl" onClick={() => ToggleLang()}>{i18n.language === 'en' ? 'RU' : 'EN'}</button>
            </div>
        </>
    )
}