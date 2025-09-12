import {useTranslation} from "react-i18next";

const Controls = ({changeCity, changeLanguage}) => {

    const {t} = useTranslation();

    return (
        <div className={"container"}>
            <div className="select-wrapper select-filter">
                <label htmlFor="city" className="text-secondary">{t('city')}</label>
                <select id="city" className="citySelect" onChange={changeCity}>
                    <option value="Tallinn">{t('tallinn')}</option>
                    <option value="Lviv">{t('lviv')}</option>
                    <option value="Chernihiv">{t('chernihiv')}</option>
                </select>
            </div>
            <div className="select-wrapper">
                <label htmlFor="lang" className="text-secondary">{t('language')}</label>
                <select id="lang" onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="uk">Українська</option>
                </select>
            </div>
        </div>
    );
}
export default Controls;