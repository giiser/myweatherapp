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
                        <h2>Tallinn, Harjumaa</h2>
                        <p className="text-secondary text-l label">current weather</p>
                        <p>weather icon</p>
                        <p>temperature</p>
                        <p>conditions</p>
                    </div>
                    <div className="primary-details-grid">
                        <div className="detail-grid-item">Humidity</div>
                        <div className="detail-grid-item">Wind speed</div>
                        <div className="detail-grid-item">Pressure</div>
                        <div className="detail-grid-item">UV Index</div>
                    </div>
                </div>
                <div className="container">
                    <div className="card-header">
                        <h3>5 day forecast</h3>
                    </div>
                    <div className="card">today</div>
                    <div className="card">tomorrow</div>
                    <div className="card">thursday</div>
                    <div className="card">friday</div>
                    <div className="card">saturday</div>
                </div>
            </main>

        </>
    )
}
export default App;