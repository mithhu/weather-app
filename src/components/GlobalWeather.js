import React from "react";
import GlobalWeatherView from "./GlobalWeatherView";
import Form from "./Form";
const API_KEY = "64b79216ffb01e7cef307089211c0a82";

// "e42d044ef1b8d3c4f4c6f29bf06c4a2a";
// "f64e34286ec3110a98b3b72018975f71";

class GlobalWeather extends React.Component {
  state = {
    temperature: "",
    city: "",
    humidity: "",
    description: "",
    error: "",
    cityName: "Dhaka District"
  };

  handleChange = e => {
    this.setState({ cityName: e.target.value, city: "" });
  };

  getWeather = async e => {
    e.preventDefault();
    const city = this.state.cityName;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && !data.message) {
      // console.log(data);
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

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ city: "" });
    }, 300000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
