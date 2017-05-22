import React, { Component } from 'react';
import axios from 'axios';



class Weather extends Component {

    render() {

      return (
        <div>
          <p>{this.props.city}</p>
          <p>{this.props.temp}&#176;C</p>
          <p>{this.props.sky}</p>
          <p>{this.props.weather}</p>
        </div>

      )
    }
}

export default Weather;
