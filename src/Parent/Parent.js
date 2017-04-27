/* eslint-disable no-unused-vars, arrow-parens, no-console, max-len, operator-linebreak */
import './Parent.css';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';
import createReactClass from 'create-react-class';

const Parent = createReactClass({
  render() {
    return (
      <div className="Parent">
        {/* <Header/> */}
        {/* <footer className="footer">
          <a href="https://www.linkedin.com/in/juliekaystokes/" className="linked"><img src="/assets/images/linkedIn.png" /></a>
        </footer> */}
      </div>
    );
  }
});

export default Parent;
