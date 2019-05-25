import React from "react";

const GlobalWeatherView = props => (
  <div>
    {props.city && (
      <div>
        <p>Location: {props.temperature}</p>
        <p>Humidity: {props.humidity}</p>
        <p>Condition: {props.description}</p>
      </div>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default GlobalWeatherView;
