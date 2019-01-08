import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";


class Home extends Component {
    state = {
      stepBySteps: [],
      title: "",
      author: "",
      step: ""
    }

  render() {
      return (
          <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>This is our Homepage Based off of Books.js</h1>
                    </Jumbotron>
                </Col>

            </Row>
          
          </Container>
      );
    }
  }

  
export default Home;

