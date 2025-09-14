import {useEffect, useState} from "react";
import {ForecastContext} from "./contexts/ForecastContext.js";
import './i18n.js';
import i18n from "i18next";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/home.jsx";
import DayForecastPage from "./pages/dayforecast.jsx";
import AboutPage from "./pages/about.jsx";
import NotFoundPage from "./pages/not-found.jsx";

const API_URL= import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;


const App = () => {

    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState(()=>{
        const query = localStorage.getItem("query");
        return query || 'Tallinn';
    });
    const [language, setLanguage] = useState(()=>{
        const language = localStorage.getItem("language");
        return language || 'en';
    });
    const [days, setDays] = useState([]);
    const [hidden, setHidden] = useState(()=>{
        const hidden = localStorage.getItem("hidden");
        return hidden || false;
    });

    //fetch forecast
    useEffect(() => {

        const fetchForecast = async () =>{
            try{
                const response = await fetch(`${API_URL}${API_KEY}&q=${query}&days=3&lang=${language}`);
                const data = await response.json();
                setForecast(data);
                setDays(data.forecast.forecastday);
            } catch (err) {
                console.error(err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchForecast();
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        localStorage.setItem('query', query);
        localStorage.setItem('hidden', hidden);

    }, [query, language]);

    const changeCity = (e) => {
        setQuery(e.target.value);
    }

    const changeLanguage = (e) => {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('language', language);
    }

    const hideFilter = () => {
        setHidden(!hidden);
    }


    if (loading) return <p>Loading forecast...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <BrowserRouter>
            <ForecastContext.Provider value={forecast}>
                <Routes>
                    <Route path="/" element={<HomePage city={query} language={language} changeCity={changeCity} changeLanguage={changeLanguage} error={error} loading={loading} days={days} hidden={hidden} setHidden={hideFilter}/>} />
                    <Route path="/details/:date" element={<DayForecastPage city={query} />}/>
                    <Route path="/about" element={<AboutPage />}/>

                    {/*this is not found. always the last one*/}
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </ForecastContext.Provider>
        </BrowserRouter>

    )
}
export default App;