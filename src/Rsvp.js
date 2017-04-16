import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
    FormGroup, FormControl, Button, Form, ControlLabel, Col, Grid, ButtonGroup, Modal, Checkbox
} from 'react-bootstrap';

import './Rsvp.css';

class Rsvp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstNameValidationState: null,
            lastNameValidationState: null,
            emailValidationState: null,
            tokenValidationState: null,
            presenceValidationState: null,
            showModal: false,
            resultMessageTitle: null,
            resultMessageBody: null,
            isSending: false
        }
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    onSubmit(event) {
        this.setState({isSending: true});
        event.preventDefault();
        this.setState({type: 'info', message: 'Sending...'}, this.sendForm.bind(this));
    }

    fetchData() {
        return {
            token: ReactDOM.findDOMNode(this.refs.token).value,
            firstName: ReactDOM.findDOMNode(this.refs.firstName).value,
            lastName: ReactDOM.findDOMNode(this.refs.lastName).value,
            email: ReactDOM.findDOMNode(this.refs.email).value,
            presentDinner: ReactDOM.findDOMNode(this.refs.presentDinner).querySelector('input').checked,
            presentBrunch: ReactDOM.findDOMNode(this.refs.presentBrunch).querySelector('input').checked,
            absent: ReactDOM.findDOMNode(this.refs.absent).querySelector('input').checked,
            adultCount: ReactDOM.findDOMNode(this.refs.adultCount).value,
            childCount: ReactDOM.findDOMNode(this.refs.childCount).value
        };
    }


    buildUrl(formData) {
        return Object.keys(formData)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]))
            .join('&');
    }

    sendData(formData) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", '/api/rsvp/create', true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(this.buildUrl(formData));
        xmlhttp.onreadystatechange = event => {
            if (event.currentTarget.readyState === XMLHttpRequest.DONE) {
                const responseCode = event.currentTarget.status;
                this.prepareModal(responseCode);
                this.setState({showModal: true, isSending: false});
                if (responseCode === 200) {
                    this.resetForm();
                }
            }
        };
    }

    sendForm() {
        const formData = this.fetchData();
        if (this.isValid(formData)) {
            this.sendData(formData);
        } else {
            this.prepareModal(0);
            this.setState({showModal: true, isSending: false});
        }
    }

    prepareModal(responseCode) {
        this.setState({
            resultMessageTitle: responseCode === 200 ? 'Merci' : 'Oups!',
            resultMessageBody: responseCode === 200 ? 'Nous avons bien reçu votre réservation!' : Rsvp.getErrorMessage(responseCode)
        });
    }

    static getErrorMessage(responseCode) {
        let message;
        switch (responseCode) {
            case 0:
                message = 'Veuillez remplir les champs en rouge.';
                break;
            case 401:
                message = 'Il semblerait que le code fourni ne soit pas valide. Veuillez vérifier sur votre faire-part.';
                break;
            default:
                message = 'Il semblerait que notre serveur rencontre une erreur. Veuillez réessayer ou nous contacter directement.';
        }
        return message;
    }

    render() {
        return (
            <div>
                <Grid >
                    <Form horizontal
                          onSubmit={this.onSubmit.bind(this)}
                          className="Rsvp-form">
                        <FormGroup controlId="rsvpFirstName" validationState={this.state.firstNameValidationState}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Prénom
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="firstName"
                                             type="text"
                                             placeholder="Votre Prénom"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpLastName" validationState={this.state.lastNameValidationState}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Nom
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="lastName" type="text" placeholder="Votre Nom"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpEmail" validationState={this.state.emailValidationState}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="email" type="email" placeholder="Votre Adresse Email"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="rsvpToken" validationState={this.state.tokenValidationState}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Code de vérification
                            </Col>
                            <Col sm={6}>
                                <FormControl ref="token" type="text"
                                             placeholder="Le code inscrit dans votre faire part"/>
                            </Col>
                        </FormGroup>
                        <Col xsOffset={2}>
                            <FormGroup controlId="rsvpPresence" validationState={this.state.presenceValidationState}>
                                <Checkbox ref="presentDinner" controlId="rsvpPresenceDinner">
                                    Je serai présent le jour J.
                                </Checkbox>
                                <Checkbox ref="presentBrunch" controlId="rsvpPresenceBrunch">
                                    Je serai présent le lendemain au brunch.
                                </Checkbox>
                                <Checkbox ref="absent" controlId="rsvpAbsence">
                                    Je ne pourrai pas être présent.
                                </Checkbox>
                            </FormGroup>
                        </Col>
                        <FormGroup controlId="rsvpPeopleCount">
                            <Col componentClass={ControlLabel} sm={2}/>
                            <Col sm={3}>
                                <ControlLabel>Nombre d'adultes</ControlLabel>
                                <FormControl ref="adultCount" componentClass="select"
                                             placeholder="Sélectionnez le nombre d'adultes">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </FormControl>
                            </Col>
                            <Col sm={3}>
                                <ControlLabel>Nombre d'enfants</ControlLabel>
                                <FormControl ref="childCount" componentClass="select"
                                             placeholder="Sélectionnez le nombre d'enfants">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}/>
                            <Col sm={6}>
                                <ButtonGroup vertical block>
                                    <Button className="btn btn-primary btn-large centerButton"
                                            disabled={this.state.isSending}
                                            type="submit">{this.state.isSending ? 'Envoi en cours...' : 'Envoyer!'}</Button>
                                </ButtonGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                </Grid>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.resultMessageTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.resultMessageBody}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    isValid(formData) {
        const isFirstNameValid = formData.firstName && formData.firstName !== '';
        const isLastNameValid = formData.lastName && formData.lastName !== '';
        const isEmailValid = formData.email && formData.email !== '';
        const isTokenValid = formData.token && formData.token !== '';
        const isPresenceValid = Rsvp.computePresenceValid(formData);

        this.setState({
            firstNameValidationState: isFirstNameValid ? null : 'error',
            lastNameValidationState: isLastNameValid ? null : 'error',
            emailValidationState: isEmailValid ? null : 'error',
            tokenValidationState: isTokenValid ? null : 'error',
            presenceValidationState: isPresenceValid ? null : 'error'
        });
        return isFirstNameValid && isLastNameValid && isEmailValid && isTokenValid && isPresenceValid;
    }

    static computePresenceValid(formData) {
        return !formData.absent && formData.presentDinner ||
            formData.absent && !formData.presentDinner && !formData.presentBrunch;
    }

    resetForm() {
        ReactDOM.findDOMNode(this.refs.token).value = '';
        ReactDOM.findDOMNode(this.refs.firstName).value = '';
        ReactDOM.findDOMNode(this.refs.lastName).value = '';
        ReactDOM.findDOMNode(this.refs.email).value = '';
    }
}

export default Rsvp;