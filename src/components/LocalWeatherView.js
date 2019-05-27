import React from "react";

const LocalWeatherView = props => (
  <div className="localWeather__container">
    {/* {!props.city && <p>Your Location</p>} */}
    {props.city && (
      <div className="weather-local__info">
        <h2>You are from {props.city}</h2>
        <h2>&</h2>
        <h2>The temperature is {props.temperature}&#176;</h2>
      </div>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default LocalWeatherView;
