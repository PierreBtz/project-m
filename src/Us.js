import React, { Component } from 'react';
import { Grid, Row, Col, Image, PageHeader } from 'react-bootstrap';
import us from './assets/private/us.jpg';

import './Us.css';

class Us extends Component {
  render() {
    return (
      <div>
          <Grid >
            <Row>
              <Col>
                <Image responsive src={us} thumbnail />
              </Col>
            </Row>
            <Row>
              <Col>
                <PageHeader className="Us-header">L'histoire commence le 6 juin 2014...</PageHeader>
                Blalbalblablablalbl
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default Us;
