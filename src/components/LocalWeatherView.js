import React from "react";

const LocalWeatherView = props => (
  <div>
    {!props.city && <p>Your Location</p>}
    {props.city && (
      <div>
        <p>
          Your Location is {props.city} and the temperature is{" "}
          {props.temperature} degree celcius
        </p>
      </div>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default LocalWeatherView;
