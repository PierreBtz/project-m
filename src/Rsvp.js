import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { FormGroup, FormControl, Button, Form, ControlLabel, Col } from 'react-bootstrap';

class Rsvp extends Component {

    onSubmit(event) {
        event.preventDefault();
        this.setState({ type: 'info', message: 'Sending...' }, this.sendForm.bind(this));
    }

    fetchData() {
        return {
            token : '0000',
            primaryAdult : {
                firstName: ReactDOM.findDOMNode(this.refs.firstName).value,
                lastName: ReactDOM.findDOMNode(this.refs.lastName).value,
                email: ReactDOM.findDOMNode(this.refs.email).value
            }
        };
    }

    sendData(formData) {
        const xmlhttp = new XMLHttpRequest();
        // need to make this async
        xmlhttp.open("POST", 'http://localhost:8080/rsvp/create', true);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(formData);
    }

    sendForm() {
        const formData = this.fetchData();
        this.sendData(JSON.stringify(formData));
    }

    render() {
        return (
            <Form horizontal onSubmit={this.onSubmit.bind(this)}>
                <FormGroup controlId="rsvpFirstName">
                    <Col componentClass={ControlLabel} sm={2}>
                        Prénom
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="firstName" type="text" placeholder="Votre Prénom" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="rsvpLastName">
                    <Col componentClass={ControlLabel} sm={2}>
                        Nom
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="lastName" type="text" placeholder="Votre Nom" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="rsvpEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="email" type="email" placeholder="Votre Adresse Email" />
                    </Col>
                </FormGroup>
                <Button className="btn btn-primary btn-large centerButton" type="submit">Envoyer!</Button>
            </Form>
        );
    }
}

export default Rsvp;