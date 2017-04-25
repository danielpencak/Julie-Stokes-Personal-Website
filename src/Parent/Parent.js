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
        <Header/>
      </div>
    );
  }
});

export default Parent;
