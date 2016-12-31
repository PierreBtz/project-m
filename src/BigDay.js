import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap';
import SiteBar from './SiteBar';
import WeddingMap from './WeddingMap';

class BigDay extends Component {
  render() {
    return (
      <div>
        <SiteBar/>
          <Grid >
            <Row>
              <PageHeader>La Date</PageHeader>
              Le 19 août 2017 à **
            </Row>
            <Row>
              <PageHeader>Les lieux</PageHeader>
              <ControlLabel>Choisir un lieu pour plus de détails</ControlLabel>
            </Row>
            <Row>
              <Col sm={6}>
                  <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
                      <option value="all">Tous</option>
                      <option value="ceremonies">Les Cérémonies</option>
                      <option value="party">La Soirée</option>
                      <option value="brunch">Le Brunch</option>
                    </FormControl>
                  </FormGroup>
              </Col>
              <Col sm={6}>
                <Panel defaultExpanded header="Les Cérémonies">
                  <address>
                    <strong>**</strong><br/>
                    **<br/>
                    **<br/>
                    <abbr title="Téléphone">Tél:</abbr> **
                  </address>
                </Panel>
              </Col>
            </Row>
            <Row>
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
