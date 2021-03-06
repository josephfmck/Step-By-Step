import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './style.css';
import ApiImages from "../components/ApiImages";
//import Moment from 'react-moment';
//import moment from 'moment'

const buttonStyle = {
    marginLeft: '100px'
};

const borderBottom = {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '10px'
};

class Steps extends Component {
    state = {
        step: {}
    };

    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getStepByStep(this.props.match.params.id)
            .then(res => this.setState({ step: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Step-By-Step Instructions</h1>
                            <h2> {this.state.step.title}</h2>
                        </Jumbotron>
                    </Col>
                </Row>

                <Col size="md-12">
                    <List>
                        <Row>
                            <Col size="md-12">
                                <h1> Step 1. </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <ApiImages>
                                </ApiImages>
                            </Col>

                            <Col size="md-6" >
                                <dl class="row">
                                    <dt class="col-sm-3">Summary of step</dt>
                                    <dd class="col-sm-6">{this.state.step.stepone}</dd>
                                </dl>
                            </Col>

                            <Col size="md-4">
                                <Link to="/FormPage">
                                    <button className="btn btn-outline-success" style={buttonStyle}> Edit</button>
                                </Link>
                            </Col>

                        </Row>
                    </List>
                </Col>



                <Col size="md-12">
                    <List>
                        <Row>
                            <Col size="md-12">
                                <h1> Step 2. </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <ApiImages>
                                </ApiImages>
                            </Col>
                            <Col size="md-6" >
                                <dl class="row">
                                    <dt class="col-sm-3">Summary of the step</dt>
                                    <dd class="col-sm-6">{this.state.step.steptwo}</dd>
                                </dl>
                            </Col>

                            <Col size="md-4">
                                <Link to="/FormPage">
                                    <button className="btn btn-outline-success" style={buttonStyle}> Edit</button>
                                </Link>
                            </Col>
                        </Row>
                    </List>
                </Col>

                <Col size="md-12">
                    <List>
                        <Row>
                            <Col size="md-12">
                                <h1> Step 3. </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <ApiImages>
                                </ApiImages>
                            </Col>
                            <Col size="md-6" >
                                <dl class="row">
                                    <dt class="col-sm-3">Summary of the step</dt>
                                    <dd class="col-sm-6">{this.state.step.stepthree}</dd>
                                </dl>
                            </Col>

                            <Col size="md-4">
                                <Link to="/FormPage">
                                    <button className="btn btn-outline-success" style={buttonStyle}> Edit</button>
                                </Link>
                            </Col>
                        </Row>
                    </List>
                </Col>

                <Col size="md-12">
                    <List>
                        <Row>
                            <Col size="md-12">
                                <h1> Step 4. </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <ApiImages>
                                </ApiImages>
                            </Col>
                            <Col size="md-6" >
                                <dl class="row">
                                    <dt class="col-sm-3">Summary of the step</dt>
                                    <dd class="col-sm-6">{this.state.step.stepfour}</dd>
                                </dl>
                            </Col>

                            <Col size="md-4">
                                <Link to="/FormPage">
                                    <button className="btn btn-outline-success" style={buttonStyle}> Edit</button>
                                </Link>
                            </Col>
                        </Row>
                    </List>
                </Col>

                <Col size="md-12">
                    <List>
                        <Row>
                            <Col size="md-12">
                                <h1> Step 5. </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <ApiImages>
                                </ApiImages>
                            </Col>
                            <Col size="md-6" >
                                <dl class="row">
                                    <dt class="col-sm-3">Summary of the step</dt>
                                    <dd class="col-sm-6">{this.state.step.stepfive}</dd>
                                </dl>
                            </Col>

                            <Col size="md-4">
                                <Link to="/FormPage">
                                    <button className="btn btn-outline-success" style={buttonStyle}> Edit</button>
                                </Link>
                            </Col>
                        </Row>
                    </List>
                </Col>
            </Container>
        );
    }
}

export default Steps;