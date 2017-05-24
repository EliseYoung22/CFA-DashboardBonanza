import React, { Component } from 'react';
import "./Activity.css";
import CircularProgressbar from 'react-circular-progressbar';
import { Card, Row, Col } from 'react-materialize';



const activity = {
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
    "distances": [
      {
        "activity": "total",
        "distance": 10.5
      },
      {
        "activity": "tracker",
        "distance": 10.5
      },
      {
        "activity": "loggedActivities",
        "distance": 0
      },
      {
        "activity": "veryActive",
        "distance": 2.56
      },
      {
        "activity": "moderatelyActive",
        "distance": 0.91
      },
      {
        "activity": "lightlyActive",
        "distance": 6.99
      },
      {
        "activity": "sedentaryActive",
        "distance": 0
      }
    ],
    "elevation": 15.24,
    "fairlyActiveMinutes": 15,
    "floors": 5,
    "lightlyActiveMinutes": 441,
    "marginalCalories": 910,
    "sedentaryMinutes": 481,
    "steps": 14506,
    "veryActiveMinutes": 32
  }
}

console.log(activity);

class Activity extends Component {
  render() {
    return (
      <div>
        <div className="steps card">
          <h5> Today's steps </h5>
          <h4>{activity.summary.steps}</h4>
          <img className="shoe-img" src={require('../../images/shoes.png')} />
          <p>of your 10000 target</p>
          <CircularProgressbar percentage={100} />
        </div>
      </div>
    )
  }
}

export default Activity;
