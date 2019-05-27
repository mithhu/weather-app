import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <p className="globalWeather__para">Please select a city</p>
        <select value={this.props.cityName} onChange={this.props.handleChange}>
          <option value="Dhaka District">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Khulna">Khulna</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Mymensingh">Mymensingh</option>
        </select>

        <button className="btn btn-primary" onClick={this.props.getWeather}>
          Get Weather
        </button>
      </form>
    );
  }
}

export default Form;
