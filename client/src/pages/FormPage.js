import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './style.css';
//import ApiImages from "../components/ApiImages";
//import Moment from 'react-moment';
//import moment from 'moment'
class FormPage extends Component {
    state = {
        steps: {}
    }
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    };

    onClick(add) {
        add.preventDefault();
        console.log('Button Works')
    }






    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Step-By-Step Create</h1>
                            <h2>Make Your Own.  </h2>
                        </Jumbotron>
                    </Col>
                </Row>

                <form>
                    <Row>
                        <Col size="md-12">
                            <List>
                                <Row>
                                    <Col size="md-12">
                                        <Input
                                            className="md-form active-cyan active-cyan-2 md-6"
                                            className="form-control" type="text" placeholder="Title" aria-label="input"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <Input
                                            className="md-form active-cyan active-cyan-2 md-12"
                                            className="form-control" type="text" placeholder="Description" aria-label="input" />

                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <Input
                                            className="md-form active-cyan active-cyan-2 md-6"
                                            className="form-control" type="text" placeholder="Other Info" aria-label="input" />

                                    </Col>
                                </Row>
                                <Row>

                                    <Col size="md-12">
                                        <div id='steps'>
                                            <Input
                                                id="stepz"
                                                className="md-form active-cyan active-cyan-2 md-6"
                                                className="form-control" type="text" placeholder="Step 1." aria-label="input" />
                                        </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col size="md-4">
                                        <button type="button" className="btn btn-primary" onClick={this.onClick} >Add Step</button>
                                    </Col>
                                </Row>


                            </List>
                        </Col>
                    </Row>
                </form>

                <Row>
                    <button className="btn btn-outline-success" type="submit" value="Submit"> Submit </button>
                </Row>

            </Container >

        );
    }


}

export default FormPage;