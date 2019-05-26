import React from "react";
import LocalWeather from "./components/LocalWeather";
import GlobalWeather from "./components/GlobalWeather";
import Title from "./components/Title";

const App = () => (
  <div>
    <Title />
    <div className="container">
      <LocalWeather />
      <GlobalWeather />
    </div>
  </div>
);
export default App;
