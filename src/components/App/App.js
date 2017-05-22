import React, { Component } from 'react';
import './App.css';
import Weather from '../Weather/Weather';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      city: '',
      sky: '',
      weather: ''
    };
  }

  componentDidMount() {
  this.getWeather();
  };

  getWeather () {
    console.log('componentDidMount()');
    const URL = 'http://api.openweathermap.org/data/2.5/weather?id=6619279&APPID=efecab0f51c2a2f0fa547bf4b33164c0'
    axios.get(URL)
      .then((response) => {
        this.setState({ temp: response.data.main.temp - 273.15, city:response.data.name, sky:response.data.weather[0].description, weather:response.data.weather[0].main });
      })
      .catch((error) => {
        console.log(error);
      });
    };

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Weather temp={this.state.temp} city={this.state.city} sky={this.state.sky} weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
