import controllable from 'react-controllables';
import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Media } from 'react-bootstrap';
import WeddingMap from './WeddingMap';

import church from './assets/private/church.png';
import cityhall from './assets/private/cityhall.png';
import lascanals from './assets/private/lascanals.jpg';
import brunch from './assets/private/brunch.png';

import location from './private/location.json';

import LocationMedia from './LocationMedia';

class BigDay extends Component {

  hoverChangedOnMap(index) {
  }

  hoverChangedOnList() {
  }

  render() {
    // As es6 imports are statics, I cannot dynamically load my image from a path in the json. Using this map instead.
    const imageMapping = {
      "church": church,
      "cityHall": cityhall,
      "lascanals": lascanals,
      "brunch": brunch
    };
    const ControlledWeddingMap = controllable(WeddingMap, ['markerHover']);
    const ControlledLocationMedia = controllable(LocationMedia, ['hover']);
    const locationMedias = location.locations
      .map(loc => <LocationMedia 
                    src= {imageMapping[loc.list.imageName]} 
                    alt={loc.list.displayName} 
                    header={loc.list.header} 
                    body={loc.list.body}
                    onHoverChange={this.hoverChangedOnList}/>);
    return (
      <div>
          <Grid>
            <Row>
              <Col md={6}>
                <PageHeader>La journée</PageHeader>
                {locationMedias}
              </Col>
              <Col md={6}>
            <PageHeader>Les lieux</PageHeader>
                <div style={{height: "450px"}}>
                  <ControlledWeddingMap onMarkerHoverChange={ this.hoverChangedOnMap }/>
                </div>
              </Col>
            </Row>                      
          </Grid>
      </div>
    );
  }
}

export default BigDay;
