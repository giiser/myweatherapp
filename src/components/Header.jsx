const Header = ({changeCity, changeDays, changeLanguage}) => {
    return (
        <header className="header">
            <h1>
                Weather App
            </h1>
            <div className="select-wrapper">
                <select className="citySelect" onChange={changeCity}>
                    <option value="Tallinn">Tallinn</option>
                    <option value="Lviv">Lviv</option>
                    <option value="Chernihiv">Chernihiv</option>
                </select>
                <select className="citySelect" onChange={changeDays}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="14">14</option>
                </select>
                <select className="citySelect" onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="uk">Українська</option>
                </select>
            </div>
        </header>
    );
}
export default Header;