import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

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
                  
                </Col>

            </Row>
          
          </Container>
        );
      }
    }

export default FormPage;

