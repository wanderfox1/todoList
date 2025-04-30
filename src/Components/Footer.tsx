import {useTranslation} from "react-i18next";


export const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="w-full bg-orange-500">
                <div className="text-center font-bold">{t("Later")}</div>
            </div>
        </>
        )
}