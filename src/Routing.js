import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import Dogs from './components/Dogs'

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/dogs" component={Dogs} />
      </Switch>
    </Router>
  );
}

export default Routing;