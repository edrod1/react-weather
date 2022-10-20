import { useState } from "react"

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [location, setLocation] = useState("")


  const API_KEY = "7c8004625e900052ab9f80d73d92abe1"
  const url = (`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`)

  const getData = (e) => {
    if (e.key === "Enter") {
      fetch(url)
        .then(res => res.json())
        .then(data => setWeatherData(data))
      console.log(weatherData)
      setLocation('')
    }

  }

  // useEffect(() => {
  //   getData()
  // }, [])


  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          placeholder="Enter Location"
          type="text"
          onChange={e => setLocation(e.target.value)}
          onKeyPress={getData}
        />
      </div>


      <div className="container">
        <div className="top">
          <div className="location">
            <p>{weatherData.name}</p>
          </div>
          <div className="temp">
            {weatherData.weather ? <h1>{weatherData.main.temp.toFixed()}ºF</h1> : null}

          </div>
          <div className="description">
            {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
          </div>
        </div>

        {weatherData.name &&
          <div className="bottom">
            <div className="feels">
              {weatherData.main ? <p className="bold">{weatherData.main.feels_like.toFixed()}ºF</p> : null}
              <p >Feels Like</p>
            </div>
            <div className="humidity">
              {weatherData.main ? <p className="bold">{weatherData.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {weatherData.wind ? <p className="bold">{weatherData.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}
export default App;
