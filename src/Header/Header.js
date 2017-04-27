/* eslint-disable no-unused-vars */
import './Header.css';
import { MenuItem, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';
import createReactClass from 'create-react-class';

const Header = createReactClass({
  render() {
    return (
      <div className="Header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <h1 className="header1">
                Julie Stokes, PMP
                <div className="register">
                  <p>{'\u00AE'}</p>
                </div>
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={() => browserHistory.push('/')}>Home</NavItem>
              <NavItem onClick={() => browserHistory.push('/projects')}>Projects</NavItem>
              <NavItem onClick={() => browserHistory.push('/contact')}>Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
});

export default Header;
