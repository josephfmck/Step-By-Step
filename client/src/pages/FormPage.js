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
        title: '',
        stepone: '',
        desc: '',
        steptwo: '',
        otherinfo: '',
        stepthree: '',
        stepfour: '',
        stepfive: ''
    }
  

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
                    <Row>
                        <Col size="md-12">
                            <List>
                                <Row>
                                    <Col size="md-12">
                                        <Input
                                        onChange={this.handleInputChange}
                                            className="md-form active-cyan active-cyan-2 md-6"
                                            className="form-control" type="text" placeholder="Title" name="title" aria-label="input"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <Input
                                        onChange={this.handleInputChange}
                                            className="md-form active-cyan active-cyan-2 md-12"
                                            className="form-control" type="text" placeholder="Description" name="desc" aria-label="input" />

                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <Input
                                        onChange={this.handleInputChange}
                                            className="md-form active-cyan active-cyan-2 md-6"
                                            className="form-control" type="text" placeholder="Other Info" name="otherinfo" aria-label="input" />

                                    </Col>
                                </Row>
                                <Row>

                                    <Col size="md-12">
                                        <div id='steps'>
                                            <Input
                                            onChange={this.handleInputChange}
                                                id="stepz"
                                                className="md-form active-cyan active-cyan-2 md-6"
                                                className="form-control" type="text" placeholder="Step 1." name="stepone" aria-label="input" />
                                        </div>
                                    </Col>

                                      <Col size="md-12">
                                        <div id='steps'>
                                            <Input
                                            onChange={this.handleInputChange}
                                                id="stepz"
                                                className="md-form active-cyan active-cyan-2 md-6"
                                                className="form-control" type="text" placeholder="Step 2." name="steptwo" aria-label="input" />
                                        </div>
                                    </Col>

                                      <Col size="md-12">
                                        <div id='steps'>
                                            <Input
                                            onChange={this.handleInputChange}
                                                id="stepz"
                                                className="md-form active-cyan active-cyan-2 md-6"
                                                className="form-control" type="text" placeholder="Step 3." name="stepthree" aria-label="input" />
                                        </div>
                                    </Col>

                                      <Col size="md-12">
                                        <div id='steps'>
                                            <Input
                                            onChange={this.handleInputChange}
                                                id="stepz"
                                                className="md-form active-cyan active-cyan-2 md-6"
                                                className="form-control" type="text" placeholder="Step 4 (Optional)" name="stepfour" aria-label="input" />
                                        </div>
                                    </Col>

                                      <Col size="md-12">
                                        <div id='steps'>
                                            <Input
                                            onChange={this.handleInputChange}
                                                id="stepz"
                                                className="md-form active-cyan active-cyan-2 md-6"
                                                className="form-control" type="text" placeholder="Step 5 (Optional)" name="stepfive" aria-label="input" />
                                        </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col size="md-4">
                                        <button type="button" className="btn btn-primary" >Add Step</button>
                                        <button className="btn btn-outline-success" type="submit" value="Submit"> Submit </button>

                                    </Col>

                        
            
                                </Row>


                            </List>
                        </Col>
                    </Row>
                </form>

                

            </Container >

        );
    }


}

export default FormPage;