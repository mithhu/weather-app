import React from "react";
import GlobalWeatherView from "./GlobalWeatherView";
import Form from "./Form";
const API_KEY = "f64e34286ec3110a98b3b72018975f71";

class GlobalWeather extends React.Component {
  render() {
    return (
      <div>
        <p>Global weather</p>
        <Form />
      </div>
    );
  }
}
export default GlobalWeather;
