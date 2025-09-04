import {useContext} from "react";
import {ForecastContext} from "../contexts/ForecastContext.js";

const SummaryContainer = () => {

    const forecast = useContext(ForecastContext);

    return (
            <div className="container">
                <div className="summary">
                    <h2 className="text-title">{forecast.location?.name?.toLocaleString()}</h2>
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
    )
}
export default SummaryContainer;