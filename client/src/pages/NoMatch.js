import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 class='text-align=center'>CREATE</h1>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">

          <Row>
            <Col size="md-3"></Col>
            <Col size="md-6">
              <h3 class='text-align=center'>Enter Your Own Step-By-Step Instructions</h3>
            </Col>
            <Col size="md-3"></Col>
          </Row>
            
          <Row>
            
          </Row>
        </Col>  
      </Row>
    </Container>
  );
}

export default NoMatch;
