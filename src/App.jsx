import {useEffect, useState} from "react";

const API_URL= import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {

    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('Tallinn');

    //fetch forecast
    useEffect(() => {

        const fetchForecast = async () =>{
            try{
                const response = await fetch(`${API_URL}${API_KEY}&q=${query}`);
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
    }, [query]);

    if (loading) return <p>Loading forecast...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <header className="header">
                <h1>
                    Weather App
                </h1>
                <div className="select-wrapper">
                    <select className="citySelect">
                        <option value="Tallinn">Tallinn</option>
                        <option value="Lviv">Lviv</option>
                        <option value="Chernihiv">Chernihiv</option>
                    </select>
                </div>
            </header>
            <main className="main">
                <div className="container">
                    <div className="summary">
                        <h2 className="text-title">{forecast.location?.name?.toLocaleString()}, {forecast.location?.region?.toLocaleString()}</h2>
                        <p className="text-secondary text-m label">Current weather</p>
                        <p className="text-xl m-0"><img src={`https:${forecast.current?.condition?.icon.toLocaleString()}`} alt="current weather icon"/></p>
                        <p className="text-l mb-0 mt-1">{forecast.current?.temp_c.toLocaleString()} °C</p>
                        <p className="text-m text-secondary mt-1">{forecast.current?.condition?.text}</p>
                    </div>
                    <div className="primary-details-grid">
                        <div className="detail-grid-item">
                            <label htmlFor="humidity" className="text-m text-secondary">Humidity</label>
                            <div id="humidity" className="text-m">{forecast.current?.humidity.toLocaleString()} %</div>
                        </div>
                        <div className="detail-grid-item">
                            <label htmlFor="wind-speed" className="text-m text-secondary">Wind speed</label>
                            <div id="wind-speed"  className="text-m">{forecast.current?.wind_kph.toLocaleString()} km/h ({forecast.current?.wind_dir.toLocaleString()})</div>
                        </div>
                        <div className="detail-grid-item">
                            <label htmlFor="high-temp" className="text-m text-secondary">High</label>
                            <div id="high-tem"  className="text-m">{forecast.forecast.forecastday[0]?.day?.maxtemp_c.toLocaleString()} °C</div>
                        </div>
                        <div className="detail-grid-item">
                            <label htmlFor="low-temp" className="text-m text-secondary">Low</label>
                            <div id="low-tem"  className="text-m">{forecast.forecast.forecastday[0]?.day?.mintemp_c.toLocaleString()} °C</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card-header">
                        <h3 className="text-title mb-1">5 day forecast</h3>
                    </div>
                    <div className="card">
                        <div className="card-left">
                            <div className="text-l">⛅</div>
                            <div className="text-s">
                                <p className="text-m m-0 text-bold">Today</p>
                                <p className="text-m mt-1 text-secondary">Partly cloudy</p>
                            </div>
                        </div>
                        <div className="card-right">
                            <p className="text-m text-bold">20°C</p>
                            <p className="text-m text-secondary">12°C</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-left">
                            <div className="text-l">⛅</div>
                            <div className="text-s">
                                <p className="text-m m-0 text-bold">Tomorrow</p>
                                <p className="text-m mt-1 text-secondary">Partly cloudy</p>
                            </div>
                        </div>
                        <div className="card-right">
                            <p className="text-m text-bold">20°C</p>
                            <p className="text-m text-secondary">12°C</p>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
export default App;