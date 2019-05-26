import React from "react";

class Form extends React.Component {
  render() {
    //   handleSubmit(event) {
    //       alert('Your favorite flavor is: ' + this.state.value);
    //       event.preventDefault();
    //   }
    return (
      <form>
        <h3>Global Weather</h3>
        <p>Please select a city</p>
        <select value={this.props.cityName} onChange={this.props.handleChange}>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Khulna">Khulna</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Mymensingh">Mymensingh</option>
        </select>
        {/* <input type="submit" value="Submit" /> */}
        <button className="btn btn-primary" onClick={this.props.getWeather}>
          Get Weather
        </button>
      </form>
    );
  }
}

export default Form;
