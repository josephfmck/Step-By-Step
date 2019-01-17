import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import './style.css';

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
                        <h1>Step By Step</h1>
                    </Jumbotron>
                </Col>

            </Row>
            
            <Row>
                <Col size='md-2'></Col>
                <Col size='md-8'>
                    <Container className='stepsContainer'>
                        <div className='stepCard'>
                            <Row>
                                <Col size='md-4'>
                                    <div className='stepNumber'>
                                        <h3>Step 1:</h3>
                                        <img className='instructionImg' src='https://s9.limitedrun.com/images/1101066/8BP079_front_1400x1400.jpg' alt='random'></img>
                                    </div>
                                </Col>
                                <Col size='md-8'>
                                    <div className='stepInfo'><p>This is where the instructions for this step will go. Need to make a function which grabs info from api and puts it in this div, creates more step cards</p></div>
                                </Col>
                
                            </Row>
                        </div>
                    </Container>
                </Col>
                <Col size='md-2'></Col>   
            </Row>
          </Container>
        );
      }
    }

export default Steps;