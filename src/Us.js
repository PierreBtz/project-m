import React, { Component } from 'react';
import { Grid, Row, Image, PageHeader } from 'react-bootstrap';
import us from './assets/private/us.jpg';

import './Us.css';

class Us extends Component {
  render() {
    return (
      <div>
          <Grid>
            <Row>
                <PageHeader>L'histoire commence le 6 juin 2014...</PageHeader>
                Blalbalblablablalbl
            </Row>
            <Row>
                <Image responsive src={us} thumbnail />
            </Row>
          </Grid>
      </div>
    );
  }
}

export default Us;
