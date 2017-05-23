import React, { Component } from 'react';
import "./Calories.css";
import { Card, Row, Col } from 'react-materialize';

const calories = {
  "activities": [],
  "goals": {
    "activeMinutes": 30,
    "caloriesOut": 2553,
    "distance": 8.05,
    "floors": 10,
    "steps": 10000
  },
  "summary": {
    "activeScore": -1,
    "activityCalories": 1877,
    "caloriesBMR": 1615,
    "caloriesOut": 3023,
  }
}

console.log(calories);

class Calories extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col s4">
            <div className="caloriescard card">
              <h2> Calories Out </h2>
            <p className="caloriestext">{calories.summary.caloriesOut}</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Calories;
