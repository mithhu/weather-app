import React from "react";
import LocalWeatherView from "./LocalWeatherView";
const API_KEY = "64b79216ffb01e7cef307089211c0a82";

// "e42d044ef1b8d3c4f4c6f29bf06c4a2a";

// "f64e34286ec3110a98b3b72018975f71";

class LocalWeather extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    error: undefined
  };
  getWeather = () => {
    navigator.geolocation.getCurrentPosition(async position => {
      const latitude = await position.coords.latitude;
      const longitude = position.coords.longitude;
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();
      if (data) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          error: ""
        });
      } else {
        this.setState({
          temperature: "",
          city: "",
          error: "Sorry! Your location is not available"
        });
      }
    });
  };

  componentDidMount() {
    this.getWeather();
    this.interval = setInterval(() => {
      this.setState({ city: "" });
      this.getWeather();
    }, 300000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <LocalWeatherView
        temperature={this.state.temperature}
        city={this.state.city}
        error={this.state.error}
      />
    );
  }
}
export default LocalWeather;
