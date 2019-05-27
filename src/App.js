import React from "react";
import LocalWeather from "./components/LocalWeather";
import GlobalWeather from "./components/GlobalWeather";
import Title from "./components/Title";

class App extends React.Component {
  state = {
    time: Date.now()
  };
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      300000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <Title />
        <div className="container">
          <LocalWeather />
          <GlobalWeather />
        </div>
      </div>
    );
  }
}
export default App;
