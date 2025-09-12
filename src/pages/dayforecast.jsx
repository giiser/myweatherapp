import Header from "../components/Header.jsx";
import {useLocation} from "react-router";
import DetailedCard from "../components/DetailedCard.jsx";

const DayForecastPage = ({city}) => {

    const location = useLocation();
    const {passedDay} = location.state || {};

    const gridItems = [
        {
            id: "max-temp",
            label: "high",
            value: passedDay?.day?.maxtemp_c.toLocaleString(),
            unit: "°C",
            icon: "📈"
        },
        {
            id: "min-temp",
            label: "low",
            value: passedDay?.day?.maxtemp_c.toLocaleString(),
            unit: "°C",
            icon: "📉"
        },
        {
            id: "humidity",
            label: "humidity",
            value: passedDay?.day?.avghumidity.toLocaleString(),
            unit: "%",
            icon: "💧"
        },
        {
            id: "wind-speed",
            label: "windSpeed",
            value: passedDay?.day?.maxwind_kph.toLocaleString(),
            unit: "kph",
            icon: "💨"
        }
    ]

    return (
        <>
            <Header headline={city} />
            <div className="main">
                    <div className="forecast-day-grid">
                        {passedDay && (
                            gridItems.map((item) => (
                                <DetailedCard key={item.id} id={item.id} label={item.label} value={item.value} unit={item.unit} icon={item.icon} />
                            ))
                        )}
                    </div>
            </div>

        </>
    )
}
export default DayForecastPage;