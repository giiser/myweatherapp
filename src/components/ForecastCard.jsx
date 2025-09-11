const ForecastCard = ({day}) => {
    return (
        <div className="card">
            <div className="card-left">
                <div className="text-m"><img src={`https:${day.day.condition?.icon}`} alt="weather icon"/></div>
                <div className="text-s">
                    <p className="text-m m-0 text-bold">{day.date}</p>
                    <p className="text-m mt-1 text-secondary">{day.day.condition.text}</p>
                </div>
            </div>
            <div className="card-right">
                <p className="text-m text-bold">{day.day.maxtemp_c}°C</p>
                <p className="text-m text-secondary">{day.day.mintemp_c}°C</p>
            </div>
        </div>
    );
}
export default ForecastCard;