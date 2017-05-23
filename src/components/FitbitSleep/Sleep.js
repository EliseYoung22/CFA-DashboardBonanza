import React, { Component } from 'react';
import "./Sleep.css";
import { Card, Row, Col } from 'react-materialize';



const sleep = {
  "sleep": [
    {
      "awakeCount": 4,
      "awakeDuration": 10,
      "awakeningsCount": 18,
      "dateOfSleep": "2016-09-28",
      "duration": 29640000,
      "efficiency": 93,
      "endTime": "2016-09-28T05:42:00.000",
      "isMainSleep": true,
      "logId": 12652718605,
      "minuteData": [
        {
          "dateTime": "21:28:00",
          "value": "1"
        },
        {
          "dateTime": "05:41:00",
          "value": "1"
        }
      ],
      "minutesAfterWakeup": 0,
      "minutesAsleep": 461,
      "minutesAwake": 33,
      "minutesToFallAsleep": 0,
      "restlessCount": 14,
      "restlessDuration": 23,
      "startTime": "2016-09-27T21:28:00.000",
      "timeInBed": 494
    }
  ],
  "summary": {
    "totalMinutesAsleep": 461,
    "totalSleepRecords": 1,
    "totalTimeInBed": 494
  }
}

console.log(sleep);

class Sleep extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col s5">
            <div className="sleep card">
              <h1> Sleep </h1>
              <p>{sleep.summary.totalMinutesAsleep / 60.0} hours</p>
            </div>
          </Col>
        </Row>

    </div>

    )
  }
}

export default Sleep;
