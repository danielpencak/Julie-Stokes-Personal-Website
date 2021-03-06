/* eslint-disable no-unused-vars */
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Parent from '../Parent/Parent';
import Projects from '../Projects/Projects';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

const App = createReactClass({
  render() {
    return (
      <Router history={browserHistory}>
        {/* <Route path="/" component={Parent}> */}
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        {/* </Route> */}
      </Router>
    );
  }
});

export default App;
