import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './style.css';
import ApiImages from "../components/ApiImages";
import Moment from 'react-moment';
import SearchBar from "../components/SearchBar";
//import moment from 'moment'


//const dateToFormat = moment().format('MMMM Do YYYY, h:mm:ss a');

class Home extends Component {
  state = {
    stepBySteps: [],
    title: "",
    author: "",
    description: "",
    steps: ""
  };

  componentDidMount() {
    this.loadStepBySteps();
  }

  loadStepBySteps = () => {
    API.getStepBySteps()
      .then(res =>
        this.setState({ stepBySteps: res.data, title: "", author: "", description: "", steps: "" })
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
        steps: this.state.steps
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
              <h1>Step-By-Step </h1>
              <h2> DIY Task's </h2>
            </Jumbotron>
            <form>
              <Col size="md-12" >
                <Row>
                  <Col size="md-6">
                    <SearchBar />
                  </Col>
                  <Col size="md-6">
                    <Link to="/FormPage">
                      <button className="btn btn-outline-success">Create Own Button</button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </form>



            
              <List>
                <Row>
                  <Col size="md-4">
                    <ApiImages>
                    </ApiImages>
                  </Col>
                  <Col size="md-4">
                    <Link to="/">
                      Link
                  </Link>
                  </Col>
                  <Col size="md-4" >
                    <Moment format="YYYY/MM/DD, h:mm:ss a"></Moment>
                  </Col>
                  <Col size="md-6" >
                    <dl class="row">
                      <dt class="col-sm-3">Description </dt>
                      <dd class="col-sm-6">A description list is perfect for defining terms. test test test test test test test test test test</dd>
                    </dl>
                  </Col>

                  <Col size="md-6">
                    <h6> Author/Src:
                  <p> ???????? </p>
                    </h6>

                  </Col>

                </Row>
              </List>


              <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Steps By Steps On My List</h1>
            </Jumbotron>
            {this.state.stepBySteps.length ? (
              <List>
                {this.state.stepBySteps.map(stepByStep => (
                  <ListItem key={stepByStep._id}>
                    <Link to={"/home/" + stepByStep._id}>
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




          </Col>
        </Row>
      </Container>
    );
  }
}


export default Home;

