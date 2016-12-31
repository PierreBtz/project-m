import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Image } from 'react-bootstrap';
import logo from './assets/logo.png'

class SiteBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-form" fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={logo} href="/"/>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="us">Anne & Pierre</NavItem>
            <NavItem eventKey={2} href="big-day">Le Grand Jour</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SiteBar;
