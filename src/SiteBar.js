import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Image, PageHeader } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
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
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default SiteBar;
