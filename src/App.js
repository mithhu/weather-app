import React from "react";
import LocalWeather from "./components/LocalWeather";
import GlobalWeather from "./components/GlobalWeather";

const App = () => (
  <div>
    <h1>Weather App</h1>
    <LocalWeather />
    <GlobalWeather />
  </div>
);
export default App;
