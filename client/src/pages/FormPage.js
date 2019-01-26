import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, AddStep } from "../components/Form";
import './style.css';
//import ApiImages from "../components/ApiImages";
//import Moment from 'react-moment';
//import moment from 'moment'
class FormPage extends Component {
    state = {
        title: '',
        stepone: '',
        desc: '',
        steptwo: '',
        otherinfo: ''
    }
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    };

    handleSubmit(event) {
        event.preventDefault();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value

        });
        console.log(this.state)
    };


    onClick(add) {
        add.preventDefault();

        return (
            <AddStep />
        )
    };


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

                <form class="create-update-form" onSubmit={this.handleSubmit}>
                    <Col size="md-12">
                        <List>
                            <Row>
                                <Col size="md-6">
                                    <Input
                                        onChange={this.handleInputChange}

                                        className="md-form active-cyan active-cyan-2 md-6"
                                        className="form-control" type="text" name="title" placeholder="Title" aria-label="input"
                                    />
                                </Col>
                                <Col size="md-6">
                                    <Input
                                                    onChange={this.handleInputChange}

                                        id="stepz"
                                        className="md-form active-cyan active-cyan-2 md-6"
                                        className="form-control" type="text" name="stepone" placeholder="Step 1." aria-label="input" />

                                </Col>

                                <Col size="md-6">
                                    <Input
                                                    onChange={this.handleInputChange}

                                        className="md-form active-cyan active-cyan-2 md-6"
                                        className="form-control" type="text" name="desc" placeholder="Description" aria-label="input" />

                                </Col>
                                <Col size="md-6">
                                    <Input
                                                    onChange={this.handleInputChange}

                                        id="stepz"
                                        className="md-form active-cyan active-cyan-2 md-6"
                                        className="form-control" type="text" name="steptwo" placeholder="Step 2." aria-label="input" />

                                </Col>
                                <Col size="md-8">
                                    <Input
                                                    onChange={this.handleInputChange}

                                        className="md-form active-cyan active-cyan-2 md-6"
                                        className="form-control" type="text" name="otherinfo" placeholder="Other Info" aria-label="input" />

                                </Col>
                                <Col size="md-4">

                                    <button type="submit" className="btn btn-primary" onClick={this.onClick} >Add Step</button>

                                    <button className="btn btn-outline-success" type="submit" > Submit </button>
                                </Col>
                            </Row>
                        </List>
                    </Col>
                </form>


            </Container>

        );
    }


}

export default FormPage;
