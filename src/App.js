import { useEffect, useState } from "react"

function App() {

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60ºF</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p clasName="bold">65ºF</p>
            <p >Feels Like</p>
          </div>
          <div className="humidity">
            <p clasName="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p clasName="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
