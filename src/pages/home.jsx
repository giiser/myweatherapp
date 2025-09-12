import SummaryContainer from "../components/SummaryContainer.jsx";
import LongTermForecast from "../components/LongTermForecast.jsx";
import Header from "../components/Header.jsx";
import Controls from "../components/Controls.jsx";

const HomePage = ({changeCity, changeLanguage, error, loading, days}) => {
    return (
        <>
            <Header headline={"appTitle"} />
            <Controls changeCity={changeCity} changeLanguage={changeLanguage} />
            <main className="main">
                <SummaryContainer />
                <LongTermForecast error={error} loading={loading} days={days} />
            </main>
        </>

    )
}
export default HomePage;