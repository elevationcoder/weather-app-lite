import React, { useState } from "react";
const api = {
  key: "5353558f99595ded269158d19f581785",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((resp) => resp.json())
        .then((data) => {
          setQuery("");
          setWeather(data);
          console.log(data);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 40
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°F
                <br />
                <p className="feels-like">
                  Feels like: {Math.round(weather.main.feels_like)}°F
                </p>
              </div>
              <br />
              <div className="weather">{weather.weather[0].main}</div>
              <div className="humid">
                <label className="humid-label">Humidity</label>
                <br />
                {Math.round(weather.main.humidity)}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
