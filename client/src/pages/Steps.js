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
        instruction: {}
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Step-By-Step Instructions</h1>
                            <h2> How to.. </h2>
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
                                <dt class="col-sm-3">Info</dt>
                                <dd class="col-sm-6">A description list is perfect for defining terms. test test test test test test test test test test</dd>
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
                                <dt class="col-sm-3">Info</dt>
                                <dd class="col-sm-6">A description list is perfect for defining terms. test test test test test test test test test test</dd>
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