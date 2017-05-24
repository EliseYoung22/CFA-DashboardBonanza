import React, { Component } from 'react';
import axios from 'axios';
import './Meetup.css';
import { Card, Row, Col } from 'react-materialize';

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
  this.getGroups();
  };

  getGroups () {
    const URL = 'https://api.meetup.com/find/events?text=fitness&key=1411443b5c771566373b7e1e493c5879&sign=true'
    setInterval(() => {
      axios.get(URL)
          .then((response) => {
            this.setState({ groups: response.data })
            console.log('hi')
          })
          .catch((error) => {
            console.log(error);
          });
    }, 2000);
    };

    render() {
      return (
        <div>
          <row>
            <div className="meetupcard card">
              <div className="redstripe" />
              <h3>Fitness <span className="meetup-font">meetup</span> in your area</h3>
              <div className="redstripe" />
                <hr className="tophr"/>
                {this.state.groups.slice(0, 10).map((group, i) => <span key={i}><a key={i} href={group.link}>{group.name}</a> <hr/><br /></span>)}
              </div>
          </row>
        </div>

      )
    }
}

export default Meetup;
