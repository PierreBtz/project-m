import React, { Component } from 'react';
import { Grid, Row, PageHeader } from 'react-bootstrap';
import Mailto from 'react-mailto';

import contacts from './private/contacts.json';

class ContactUs extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <PageHeader>Contact</PageHeader>
              Vous avez une question ou un suggestion? N'hésitez pas à nous contacter&nbsp;
                <Mailto email={contacts.email}>
                    par email!
                </Mailto>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ContactUs;
