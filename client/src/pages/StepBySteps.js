import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class StepBySteps extends Component {
  state = {
    stepBySteps: [],
    title: "",
    author: "",
    description: "",
    step1: "",
    step2: "",
    step3: "",
    step4: ""

  };

  componentDidMount() {
    this.loadStepBySteps();
  }

  loadStepBySteps = () => {
    API.getStepBySteps()
      .then(res =>
        this.setState({ stepBySteps: res.data, title: "", author: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteStepByStep = id => {
    API.deleteStepByStep(id)
      .then(res => this.loadStepBySteps())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveStepByStep({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        step1: this.state.step1,
        step2: this.state.step2,
        step3: this.state.step3,
        step4: this.state.step4
      })
        .then(res => this.loadStepBySteps())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
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
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.stepBySteps.length ? (
              <List>
                {this.state.stepBySteps.map(stepByStep => (
                  <ListItem key={stepByStep._id}>
                    <Link to={"/stepbystep/" + stepByStep._id}>
                      <strong>
                        {stepByStep.title} by {stepByStep.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteStepByStep(stepByStep._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StepBySteps;
