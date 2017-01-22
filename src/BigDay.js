import controllable from 'react-controllables';
import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Media } from 'react-bootstrap';
import WeddingMap from './WeddingMap';
import church from './assets/private/church.png';
import cityhall from './assets/private/cityhall.png';
import lascanals from './assets/private/lascanals.jpg';
import brunch from './assets/private/brunch.png';

import LocationMedia from './LocationMedia';

class BigDay extends Component {

  hoverChangedOnMap() {

  }

  onStateChange() {
    console.log(this.state);
  }

  render() {
    const ControlledWeddingMap = controllable(WeddingMap, ['hover']);
    return (
      <div>
          <Grid>
            <Row>
              <Col  md={6}>
                <PageHeader>La journée</PageHeader>
                <LocationMedia src={church} alt="Mairie Goutrens" header="19 août 2017 - ??h?? - **" body="Rajouter blabla pratique + adresse"/>
                <LocationMedia src={cityhall} alt="Eglise Goutrens" header="19 août 2017 - 15h00 - **" body="Rajouter blabla pratique + adresse"/>
                <LocationMedia src={lascanals} alt="Las Canals" header="19 août 2017 - ?? - **" body="Rajouter blabla pratique + adresse"/>
                <LocationMedia src={brunch} alt="Brunch" header="20 août 2017 - ?? - **" body="Rajouter blabla pratique + adresse"/>
              </Col>
              <Col  md={6}>
            <PageHeader>Les lieux</PageHeader>
                <div style={{height: "450px"}}>
                <ControlledWeddingMap onHoverChange={ this.hoverChangedOnMap }/>
                </div>
              </Col>
            </Row>                      
          </Grid>
      </div>
    );
  }
}

export default BigDay;
