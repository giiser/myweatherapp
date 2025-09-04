const ForecastCard = () => {
    return (
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
    );
}
export default ForecastCard;