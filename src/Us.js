import React, { Component } from 'react';
import { Grid, Row, Image, PageHeader, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import us from './private/assets/us.jpg';

import './Us.css';

class Us extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <PageHeader>Bienvenue sur notre site de mariage!</PageHeader>
          </Row>
          <Row>
            Vous trouverez ici de quoi confirmer votre venue, nous contacter et des détails pratiques pour que ce grand jour
            se déroule au mieux!
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
