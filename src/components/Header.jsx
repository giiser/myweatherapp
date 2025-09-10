import Controls from "./Controls.jsx";
import {useTranslation} from "react-i18next";

const Header = ({changeCity, changeDays, changeLanguage}) => {

    const {t} = useTranslation();


    return (
        <header className="header">
            <h1>
                {t('appTitle')}
            </h1>
            <Controls changeCity={changeCity} changeDays={changeDays} changeLanguage={changeLanguage}/>
        </header>
    );
}
export default Header;