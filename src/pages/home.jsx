import SummaryContainer from "../components/SummaryContainer.jsx";
import LongTermForecast from "../components/LongTermForecast.jsx";
import Header from "../components/Header.jsx";

const HomePage = ({changeCity, changeLanguage, error, loading}) => {
    return (
        <>
            <Header changeCity={changeCity} changeLanguage={changeLanguage} />
            <main className="main">
                <SummaryContainer />
                <LongTermForecast error={error} loading={loading} />
            </main>
        </>

    )
}
export default HomePage;