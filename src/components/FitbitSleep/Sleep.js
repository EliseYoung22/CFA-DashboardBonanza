import React, { Component } from 'react';
import "./Sleep.css";
import { Card, Row, Col } from 'react-materialize';



const sleep = {
  "summary": {
    "totalMinutesAsleep": 480,
    "totalSleepRecords": 1,
    "totalTimeInBed": 506
  }
}

console.log(sleep);

class Sleep extends Component {
  render() {
    return (
      <div>
            <div className="sleepcard card">
              <h1>{sleep.summary.totalMinutesAsleep / 60.0} hours sleep </h1>
            {/* <p className="sleeptext">{sleep.summary.totalMinutesAsleep / 60.0} hours</p> */}
            </div>
    </div>

    )
  }
}

export default Sleep;
