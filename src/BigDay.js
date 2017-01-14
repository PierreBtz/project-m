import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, FormGroup, FormControl, ControlLabel, Panel, Media, Label } from 'react-bootstrap';
import WeddingMap from './WeddingMap';
import church from './assets/private/church.png';
import cityhall from './assets/private/cityhall.png';
import lascanals from './assets/private/lascanals.jpg';
import brunch from './assets/private/brunch.png';

class BigDay extends Component {
  render() {
    return (
      <div>
          <Grid >
            <Row>
              <PageHeader>Programme de la journée</PageHeader>
              <Media>
                <Media.Left>
                  <img width={128} height={128} src={church} alt="Mairie Goutrens"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>19 août 2017 - ??h?? - **</Media.Heading>
                    Rajouter blabla pratique + adresse
                </Media.Body>
              </Media>
              <Media>
                <Media.Left>
                  <img width={128} height={128} src={cityhall} alt="Eglise Goutrens"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>19 août 2017 - 15h00 - **</Media.Heading>
                    Rajouter blabla pratique + adresse
                </Media.Body>
              </Media>
              <Media>
                <Media.Left>
                  <img width={128} height={128} src={lascanals} alt="Las Canals"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>19 août 2017 - ?? - **</Media.Heading>
                    Rajouter blabla pratique + adresse
                </Media.Body>
              </Media>
              <Media>
                <Media.Left>
                  <img width={128} height={128} src={brunch} alt="Brunch"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>20 août 2017 - ?? - **</Media.Heading>
                    Rajouter blabla pratique + adresse
                </Media.Body>
              </Media>
            </Row>
            <Row>
            <PageHeader>Les lieux</PageHeader>
              <Col>
                <div style={{height: "450px"}}>
                <WeddingMap/>
                </div>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default BigDay;
