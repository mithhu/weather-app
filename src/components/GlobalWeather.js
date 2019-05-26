import React from "react";
import GlobalWeatherView from "./GlobalWeatherView";
import Form from "./Form";
const API_KEY = "f64e34286ec3110a98b3b72018975f71";

class GlobalWeather extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    cityName: "Dhaka"
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ cityName: event.target.value });
    console.log(this.state.value);
  };

  getWeather = async e => {
    console.log(this.state.cityName);
    e.preventDefault();
    const city = this.state.cityName;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && !data.message) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        humidity: "",
        description: "",
        error: "Please enter city name correctly"
      });
    }
  };
  render() {
    return (
      <div className="form-container">
        <Form
          cityName={this.state.cityName}
          handleChange={this.handleChange}
          getWeather={this.getWeather}
        />
        <GlobalWeatherView
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default GlobalWeather;
