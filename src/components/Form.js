import React from "react";

class Form extends React.Component {
  render() {
    //   handleSubmit(event) {
    //       alert('Your favorite flavor is: ' + this.state.value);
    //       event.preventDefault();
    //   }
    return (
      <form>
        <select value={this.props.cityName} onChange={this.props.handleChange}>
          <option value="Dhaka">Dhaka</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Khulna">Khulna</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        {/* <input type="submit" value="Submit" /> */}
        <button className="btn btn-primary" onClick={this.props.getWeather}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
