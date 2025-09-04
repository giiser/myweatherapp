import ForecastCard from "./ForecastCard.jsx";
import {useContext} from "react";
import {ForecastContext} from "../contexts/ForecastContext.js";

const LongTermForecast = () => {

    const forecast = useContext(ForecastContext);

    return (
        <div className="container">
            <div className="card-header">
                <h3 className="text-title mb-1">5 day forecast</h3>
            </div>
            <ForecastCard forecast={forecast} day={"0"} />
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
    );
}
export default LongTermForecast;