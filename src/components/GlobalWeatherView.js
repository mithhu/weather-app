import React from "react";

const GlobalWeatherView = props => (
  <div>
    //only shows the weather report when the imformations are retrieved from
    server
    {props.city && (
      <div className="weather-global__info">
        <p className="weather__key">
          Temperature:
          <span className="weather__value"> {props.temperature}&#176;</span>
        </p>
        <p className="weather__key">
          Humidity:
          <span className="weather__value"> {props.humidity}%</span>
        </p>
        <p className="weather__key">
          Condition:
          <span className="weather__value"> {props.description}</span>
        </p>
      </div>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default GlobalWeatherView;
