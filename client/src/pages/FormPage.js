import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../components/Form";
class FormPage extends Component {
    state = {
      steps: {}
    };

    render() {
        return (
          <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>This is where we see the form for users Based off of Book.js Form</h1>
                    </Jumbotron>
                    <form>
                        <Input
                          value={this.state.title}
                          onChange={this.handleInputChange}
                          name="title"
                          placeholder="Title (required)"
                        />
                        <Input
                          value={this.state.author}
                          onChange={this.handleInputChange}
                          name="author"
                          placeholder="Your username (required)"
                        />
                        <TextArea
                          //value={this.state.synopsis}
                          onChange={this.handleInputChange}
                          name="synopsis"
                          placeholder="Step 1 (required)"
                        />
                        <TextArea
                          //value={this.state.synopsis}
                          onChange={this.handleInputChange}
                          name="synopsis"
                          placeholder="Step 2 (required)"
                        />
                        <FormBtn
                          disabled={!(this.state.author && this.state.title)}
                          onClick={this.handleFormSubmit}
                        >
                          Submit Book
                        </FormBtn>
            </form>
                </Col>

            </Row>
          
          </Container>
        );
      }
    }

export default FormPage;

