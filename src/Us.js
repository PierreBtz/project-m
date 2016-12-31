import React, { Component } from 'react';
import { Grid, Row, Col, Image, PageHeader } from 'react-bootstrap';
import SiteBar from './SiteBar';
import us from './assets/private/us.jpg';

class Us extends Component {
  render() {
    return (
      <div>
        <SiteBar/>
          <Grid >
            <Row>
              <Col>
                <Image responsive src={us} thumbnail />
              </Col>
            </Row>
            <Row>
              <Col>
                <PageHeader>Anne et Pierre <small>L'histoire commence le 6 juin 2014...</small></PageHeader>
                Blalbalblablablalbl
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default Us;
