import React, { Component } from 'react';
import Griddle from 'griddle-react';

class Admin extends Component {

  getData(present, token) {
    const xmlhttp = new XMLHttpRequest();
    //given the context, synchronous query is ok
    xmlhttp.open('GET', `/api/rsvp/report/${present ? 'present' : 'absent'}?token=${token}`, false);
    xmlhttp.send();
    if(xmlhttp.status === 200) {
      return JSON.parse(xmlhttp.responseText);
    }
  }

  render() {
    const token = this.props.location.query.token
    const presents = this.getData(true, token);
    const absents = this.getData(false, token);
    return (
      <div>
        
        <h1>Présents:</h1>
        <Griddle results={presents} showFilter={true} />
        <h1>Absents:</h1>
        <Griddle results={absents} showFilter={true} />
      </div>
    );
  }
}

export default Admin;
