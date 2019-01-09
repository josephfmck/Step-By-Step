import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './style.css';
import Footer from "../components/Footer";
class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
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
              <a />
            </Jumbotron>
            <form>
              <Col size="md-12" >
                <Row>
                  <Col size="md-6">
                    <Input
                      class="md-form active-cyan active-cyan-2 md-6"
                      class="form-control" type="text" placeholder="Search" aria-label="Search"
                    />
                  </Col>
                  <Col size="md-6">
                    <Link to="/">
                      <button className="btn btn-outline-success">Create Own Button</button>

                    </Link>
                  </Col>
                </Row>
              </Col>

              <List>
                <Row>
                  <Col size="md-4">
                  img
                  </Col>
                  <Col size="md-4">
                  link
                  </Col>
                  <Col size="md-4">
                  time created
                  </Col>
                  <Col size="md-6">
                  Description
                  </Col>
                  <Col size="md-6">
                  Author/Src
                  </Col>
                </Row>
              </List>  

            </form>
            <Footer>
                
                </Footer> 
          </Col>
        
        </Row>
      </Container>
    );
  }
}

export default Books;
