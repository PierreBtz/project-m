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
            <PageHeader>Bienvenue sur le site de notre mariage!</PageHeader>
          </Row>
          <Row>
            <Col md={6}>
              <Image responsive src={us} thumbnail />
            </Col>
            <Col md={6}>
              Vous trouverez ici tous les détails pratiques dont vous aurez besoin:
                <ListGroup>
                <ListGroupItem header="Le Grand Jour" href="big-day">L'Agenda du Mariage</ListGroupItem>
                <ListGroupItem header="Confirmer Ma Venue" href="rsvp">Pour nous aider à préparer au mieux ce jour, merci de nous répondre.</ListGroupItem>
                <ListGroupItem header="Hébergement" >TODO</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Us;
