import SummaryContainer from "../components/SummaryContainer.jsx";
import LongTermForecast from "../components/LongTermForecast.jsx";
import Header from "../components/Header.jsx";
import Controls from "../components/Controls.jsx";

const HomePage = ({city, language, changeCity, changeLanguage, error, loading, days, hidden, setHidden}) => {
    return (
        <>
            <Header headline={"apptitle"} />
            <Controls city={city} language={language} changeCity={changeCity} changeLanguage={changeLanguage} hidden={hidden} setHidden={setHidden}/>
            <main className="main">
                <SummaryContainer />
                <LongTermForecast error={error} loading={loading} days={days} />
            </main>
        </>

    )
}
export default HomePage;