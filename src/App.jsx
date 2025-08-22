const App = () => {
    return (
        <>
            <header className="header">
                <h1>Weather App</h1>
                <div className="selectWrapper">
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
                        <p>Tallinn</p>
                        <p>current weather</p>
                        <p>weather icon</p>
                        <p>temperature</p>
                        <p>conditions</p>
                    </div>
                    <div className="primaryDetailsGrid">
                        <div className="detailGridItem">Humidity</div>
                        <div className="detailGridItem">Wind speed</div>
                        <div className="detailGridItem">Pressure</div>
                        <div className="detailGridItem">UV Index</div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardHeader">
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