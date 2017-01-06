import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Image, PageHeader } from 'react-bootstrap';
import logo from './assets/logo.png';

import './SiteBar.css';

class SiteBar extends Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=La+Belle+Aurore" />
      <div className="SiteBar-header-container" id="sitebar-page-header">Anne & Pierre </div>
      <div>
        <Navbar className="navbar-form">
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={logo} href="/"/>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="us">Anne & Pierre</NavItem>
            <NavItem eventKey={2} href="big-day">Le Grand Jour</NavItem>
            <NavItem eventKey={3} href="rsvp">Confirmer Ma Venue</NavItem>            
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default SiteBar;
