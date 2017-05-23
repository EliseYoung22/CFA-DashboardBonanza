import React, { Component } from 'react';
import axios from 'axios';
import './Meetup.css';

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
    axios.get(URL)
      .then((response) => {
        this.setState({ groups: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    };

    render() {
      return (
        <div>
          <h3>Fitness Meetups in your area</h3>
          {this.state.groups.slice(0, 10).map((group, i) => <span key={i}><a key={i} href={group.link}>{group.name}</a> <br /></span>)}
        </div>

      )
    }
}

export default Meetup;
