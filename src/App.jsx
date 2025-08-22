const App = () => {
    return (
        <>
            <header className="header">
                <h1>Weather App</h1>
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
                        <h2 className="text-title">Tallinn, Harjumaa</h2>
                        <p className="text-secondary text-m label">Current weather</p>
                        <p className="text-xl m-0">⛅</p>
                        <p className="text-l mb-0 mt-1">18°C</p>
                        <p className="text-m text-secondary mt-1">Partly cloudy</p>
                    </div>
                    <div className="primary-details-grid">
                        <div className="detail-grid-item">
                            <label htmlFor="humidity" className="text-m text-secondary">Humidity</label>
                            <div id="humidity" className="text-m">75%</div>
                        </div>
                        <div className="detail-grid-item">
                            <label htmlFor="wind-speed" className="text-m text-secondary">Wind speed</label>
                            <div id="wind-speed"  className="text-m">20 km/h</div>
                        </div>
                        <div className="detail-grid-item">
                            <label htmlFor="high-temp" className="text-m text-secondary">High</label>
                            <div id="high-tem"  className="text-m">20°C</div>
                        </div>
                        <div className="detail-grid-item">
                            <label htmlFor="low-temp" className="text-m text-secondary">Low</label>
                            <div id="low-tem"  className="text-m">12°C</div>
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