import {useEffect, useState} from "react";
import Header from "./components/Header.jsx";
import SummaryContainer from "./components/SummaryContainer.jsx";
import LongTermForecast from "./components/LongTermForecast.jsx";
import {ForecastContext} from "./contexts/ForecastContext.js";

const API_URL= import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;



const App = () => {

    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('Tallinn');
    const [language, setLanguage] = useState('en');
    const [days, setDays] = useState('5');

    //fetch forecast
    useEffect(() => {

        const fetchForecast = async () =>{
            try{
                const response = await fetch(`${API_URL}${API_KEY}&q=${query}&days=${days}&lang=${language}`);
                const data = await response.json();
                setForecast(data);
            } catch (err) {
                console.error(err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchForecast();
    }, [query, days, language]);

    const changeCity = (e) => {
        setQuery(e.target.value);
    }

    const changeLanguage = (e) => {
        setLanguage(e.target.value);
    }
    const changeDays = (e) => {
        setDays(e.target.value);
    }

    if (loading) return <p>Loading forecast...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ForecastContext.Provider value={forecast}>
            <Header changeCity={changeCity} changeDays={changeDays} changeLanguage={changeLanguage} />
            <main className="main">
                <SummaryContainer />
                <LongTermForecast />
            </main>

        </ForecastContext.Provider>
    )
}
export default App;