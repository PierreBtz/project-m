import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Image } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import logo from './assets/logo.png';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=La+Belle+Aurore" />
      <div className="App-header-container" id="app-page-header">Anne & Pierre </div>
      <div id="app-navbar">
        <Navbar className="navbar-form">
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={logo} href="/"/>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Anne & Pierre</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/big-day">
              <NavItem eventKey={2}>Le Grand Jour</NavItem>
            </LinkContainer>
            <LinkContainer to="/rsvp">
              <NavItem eventKey={3}>Confirmer Ma Venue</NavItem>            
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
      {this.props.children}
      </div>
    );
  }
}

export default App;
