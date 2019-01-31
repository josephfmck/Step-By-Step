import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
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
        author: '',
        description: '',
        stepone: '',
        steptwo: '',
        stepthree: '',
        stepfour: '',
        stepfive: '',
        steps: ['step']
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

    addStepOnClick = () => {
        var joined = this.state.steps.concat('step');
        this.setState({ steps: joined });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveStepByStep({
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            stepone: this.state.stepone, 
            steptwo: this.state.steptwo, 
            stepthree: this.state.stepthree, 
            stepfour: this.state.stepfour, 
            stepfive: this.state.stepfive 
          })
            .then(res => this.loadStepBySteps())
            .catch(err => console.log(err));
        }
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
                                            className="form-control" type="text" placeholder="Description" name="description" aria-label="input" />

                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <Input
                                        onChange={this.handleInputChange}
                                            className="md-form active-cyan active-cyan-2 md-6"
                                            className="form-control" type="text" placeholder="Author" name="author" aria-label="input" />

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

                                      <Col size="md-12">
                
                                        <div id='steps'>
                                            {this.state.steps.map((step,i) => <Input key={i}
                                                id="stepz"
                                                className="md-form active-cyan active-cyan-2 md-6"
                                                className="form-control" type="text" placeholder="Step" name="Step" aria-label="input" />)}
                                        </div>
                                        
                                      </Col>

                                </Row>

                                <Row>
                                    <Col size="md-4">
                                        <button type="button" className="btn btn-primary" onClick={this.addStepOnClick}>Add Step</button>
                                        <button className="btn btn-outline-success" type="submit" value="Submit"> Submit </button>

                                        <FormBtn
                                          disabled={!(this.state.stepone && this.state.title)}
                                          onClick={this.handleFormSubmit}
                                        >
                                          Submit Step By Step
                                        </FormBtn>

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