import {useTranslation} from "react-i18next";

const Controls = ({city, language, changeCity, changeLanguage, hidden, setHidden}) => {

    const {t} = useTranslation();
    const isHidden = hidden?'hidden':'';

    return (
        <div className={"container"}>
            <button className={'btn-controls'} onClick={setHidden}>{hidden?t('showControlsButton'):t('hideControlsButton')}</button>
            <div className={`select-wrapper ${isHidden}`}>
                <label htmlFor="city" className="text-secondary">{t('city')}</label>
                <select id="city" className="citySelect" value={city} onChange={changeCity}>
                    <option value="Tallinn">{t('tallinn')}</option>
                    <option value="Lviv">{t('lviv')}</option>
                    <option value="Chernihiv">{t('chernihiv')}</option>
                </select>
            </div>
            <div className={`select-wrapper ${isHidden}`}>
                <label htmlFor="lang" className="text-secondary">{t('language')}</label>
                <select id="lang" value={language} onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="uk">Українська</option>
                </select>
            </div>
        </div>
    );
}
export default Controls;