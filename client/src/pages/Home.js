import React, { Component } from "react";
import {  Input } from 'reactstrap';
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";
import './style.css';
import ApiImages from "../components/ApiImages";
import Moment from 'react-moment';
import Axios from "axios";
//import SearchBar from "../components/SearchBar";
//import SearchField from 'react-search-field';
//import moment from 'moment'


//const dateToFormat = moment().format('MMMM Do YYYY, h:mm:ss a');

class Home extends Component {
  state = {
    stepBySteps: [],
    title: "",
    author: "",
    description: "",
    stepone: "",
    steptwo: "",
    stepthree: "",
    stepfour: "",
    stepfive: ""
  };

  componentDidMount() {
    this.search("");
    this.loadStepBySteps();
  }

  loadStepBySteps = () => {
    API.getStepBySteps()
      .then(res =>
        this.setState({ 
          stepBySteps: res.data, 
          title: "", 
          author: "", 
          description: "", 
          stepone: "", 
          steptwo: "", 
          stepthree: "", 
          stepfour: "", 
          stepfive: "" 
        })
      )
      .catch(err => console.log(err));
  };

    //handleSearchInputChange = () => {
  //  API.getSearchInfo()
  //  .then(res =>
  //    this.setState({ 
  //      stepBySteps: res.data, 
  //      title: "", 
  //      author: "", 
  //      description: "", 
  //      stepone: "", 
  //      steptwo: "", 
  //      stepthree: "", 
  //      stepfour: "", 
  //      stepfive: "",
  //      query: this.search.value
//
  //    })
  //  )
  //  .catch(err => console.log(err));
  //};


  deleteStepByStep = id => {
    API.deleteStepByStep(id)
      .then(res => this.loadStepBySteps())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log('Value', value)
    this.setState({
      [name]: value,
      query: value
    });

    this.search(value);
  };

  search = query => {
    Axios.get('http://localhost:3001/api/stepbysteps')
    .then(res =>{
      const searchInfo = (res.data || []).map(obj => ({
        title: obj.title,
        author: obj.author
      }));

      this.setState({ searchInfo });
    })
  };



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
              <h1>Step-By-Step </h1>
              <h2> DIY Task's </h2>
            </Jumbotron>
            <form>
              <Col size="md-12" >
                <Row>
                  <Col id="search" size="md-4">
                  

                  <form>
                    <Input onChange={this.handleInputChange} type="search" name="search" id="exampleSearch" placeholder="search"/>
                  </form>


                  </Col>
                  <Col size="md-4">
                    <Link to="/">
                      <button className="btn btn-outline-success">Search</button>
                    </Link>
                  </Col>
                  <Link to="/FormPage">
                  <Col size="md-4">
                  <button className="btn btn-outline-success">Create Own Button</button>
                  </Col>
                  </Link>
                </Row>
              </Col>
            </form>



            
            


            <Col size="md-12">

            {this.state.stepBySteps.length ? (
              <List>
                {this.state.stepBySteps.map(stepByStep => (
                  <ListItem key={stepByStep._id}>
                   <Row>
                    <Col size="md-4">
                        <ApiImages>
                        </ApiImages>
                    </Col>
                    <Col size="md-4">
                        <Link to={"/home/" + stepByStep._id}>
                          <strong>
                            {stepByStep.title}
                          </strong>
                        </Link>
                    </Col>
                    <Col size="md-4" >
                    <Moment format="YYYY/MM/DD, h:mm:ss a"></Moment>
                    <h6> Author/Src: {stepByStep.author}
                    </h6>
                    </Col>

                   </Row>
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

