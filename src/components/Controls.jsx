import {useTranslation} from "react-i18next";

const Controls = ({changeCity, changeDays, changeLanguage}) => {

    const {t} = useTranslation();

    return (
        <div className={"controls"}>
            <div className="select-wrapper select-filter">
                <label htmlFor="city" className="text-secondary">{t('city')}</label>
                <select id="city" className="citySelect" onChange={changeCity}>
                    <option value="Tallinn">{t('tallinn')}</option>
                    <option value="Lviv">{t('lviv')}</option>
                    <option value="Chernihiv">{t('chernihiv')}</option>
                </select>
            </div>
            <div className="select-wrapper">
                <label htmlFor="days" className="text-secondary">{t('forecastDays')}</label>
                <select id="days"  onChange={changeDays}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="14">14</option>
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