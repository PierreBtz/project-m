import React, { Component } from 'react';
import { Media, Grid, Row, PageHeader } from 'react-bootstrap';

import tent from './private/assets/tent.png';
import lascanals from './private/assets/lascanals.jpg';

import location from './private/location.json';

class Accommodation extends Component {

  render() {
    // As es6 imports are statics, I cannot dynamically load my image from a path in the json. Using this map instead.
    const imageMapping = {
      'tent': tent,
      'lascanals': lascanals,
    };
    const accomodationMedias = location.accommodations
      .map((loc, index) =>
        <Media>
          <Media.Left>
            <img width={128} height={128} src={imageMapping[loc.imageName]} role='presentation' />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{loc.header}</Media.Heading>
              <div dangerouslySetInnerHTML={{__html: loc.body}} />
          </Media.Body>
        </Media>);
    return (
      <div>
        <Grid>
          <Row>
            <PageHeader>Hébergement <small>Quelques idées</small></PageHeader>
            Voici quelques suggestions pour vous aider à trouver un hébergement.
            Cette liste n'est bien entendu pas exhaustive.
            {accomodationMedias}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Accommodation;
