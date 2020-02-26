import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navbar from './Navbar';
import Films from "./Films";
import SingleFilm from './SingleFilm';
import People from "./People";
import SinglePerson from './SinglePerson';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/films" component={Films} />
        <Route path="/films/:id" component={SingleFilm} />
        <Route exact path="/people" component={People} />
        <Route path="/people/:id" component={SinglePerson} />
      </Switch>
    </Router>
  );
}

export default App
