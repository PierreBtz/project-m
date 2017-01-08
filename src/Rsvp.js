import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { FormGroup, FormControl, Button, Form, ControlLabel, Col, Checkbox, Grid, ButtonGroup } from 'react-bootstrap';

class Rsvp extends Component {

    onSubmit(event) {
        event.preventDefault();
        this.setState({ type: 'info', message: 'Sending...' }, this.sendForm.bind(this));
    }

    fetchData() {
        return {
            token: ReactDOM.findDOMNode(this.refs.token).value,
            firstName: ReactDOM.findDOMNode(this.refs.firstName).value,
            lastName: ReactDOM.findDOMNode(this.refs.lastName).value,
            email: ReactDOM.findDOMNode(this.refs.email).value,
            present: ReactDOM.findDOMNode(this.refs.present).value,
            adultCount: ReactDOM.findDOMNode(this.refs.adultCount).value,
            childCount: ReactDOM.findDOMNode(this.refs.childCount).value
        };
    }


    buildUrl(formData) {
        return Object.keys(formData)
        // no lambda support yet :(
            .map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]);
            })
            .join('&');
    }

    sendData(formData) {
        const xmlhttp = new XMLHttpRequest();
        // need to make this async
        xmlhttp.open("POST", '/api/rsvp/create', true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(this.buildUrl(formData));
    }

    sendForm() {
        const formData = this.fetchData();
        this.sendData(formData);
    }

    render() {
        return (
            <div>
                <Grid >
                    <Form horizontal onSubmit={this.onSubmit.bind(this)}>
                        <FormGroup controlId="rsvpFirstName">
                            <Col componentClass={ControlLabel} sm={2}>
                                Prénom
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="firstName" type="text" placeholder="Votre Prénom" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpLastName">
                            <Col componentClass={ControlLabel} sm={2}>
                                Nom
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="lastName" type="text" placeholder="Votre Nom" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="email" type="email" placeholder="Votre Adresse Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpToken">
                            <Col componentClass={ControlLabel} sm={2}>
                                Code de vérification
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="token" type="text" placeholder="Le code inscrit dans votre faire part" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpPresence">
                            <Col componentClass={ControlLabel} sm={2} />
                            <Col sm={3}>
                                <input ref="present" type="radio" name="radioButtonSet" value='true' defaultChecked />
                                <ControlLabel>Je serai présent</ControlLabel>
                            </Col>
                            <Col sm={3}>
                                <input type="radio" name="radioButtonSet" value='absent' />
                                <ControlLabel>Je ne pourrai pas être là</ControlLabel>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpPeopleCount">
                            <Col componentClass={ControlLabel} sm={2} />
                            <Col sm={3}>
                                <ControlLabel>Nombre d'adultes</ControlLabel>
                                <FormControl ref="adultCount" componentClass="select" placeholder="Sélectionnez le nombre d'adultes">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </FormControl>
                            </Col>
                            <Col sm={3}>
                                <ControlLabel>Nombre d'enfants</ControlLabel>
                                <FormControl ref="childCount" componentClass="select" placeholder="Sélectionnez le nombre d'enfants">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2} />
                            <Col sm={6}>
                                <ButtonGroup vertical block>
                                    <Button className="btn btn-primary btn-large centerButton" type="submit">Envoyer!</Button>
                                </ButtonGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                </Grid>
            </div>
        );
    }
}

export default Rsvp;