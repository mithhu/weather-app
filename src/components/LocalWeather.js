import React from "react";
import LocalWeatherView from "./LocalWeatherView";

class LocalWeather extends React.Component {
  render() {
    return (
      <div>
        <p>Local Weather</p>
        <LocalWeatherView />
      </div>
    );
  }
}
export default LocalWeather;
