import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

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
                        <h1>This is where we see the step-by-step Based off of Detail.js</h1>
                    </Jumbotron>
                </Col>

            </Row>
          
          </Container>
        );
      }
    }

export default Steps;