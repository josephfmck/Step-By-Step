import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "./pages/Books";
import Detail from "./pages/Detail";

import Home from "./pages/Home";
import Steps from "./pages/Steps";
import FormPage from "./pages/FormPage";
import NoMatch from "./pages/NoMatch";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/steps" component={Steps} />
          <Route exact path="/formpage" component={FormPage} />

          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />

          <Route component={NoMatch} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
