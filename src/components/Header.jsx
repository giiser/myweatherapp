import {useTranslation} from "react-i18next";

const Header = ({headline}) => {

    const {t} = useTranslation();


    return (
        <header className="header">
            <h1>
                {t(headline.toLowerCase())}
            </h1>
        </header>
    );
}
export default Header;