import React, { Component } from 'react';
import './Projects.css';
import PropTypes from 'prop-types';
import { MenuItem, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap';
import createReactClass from 'create-react-class';
import { browserHistory } from 'react-router';

const Projects = createReactClass({
  render() {
    return (
      <div className="Home">
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
              <NavItem onClick={() => browserHistory.push('/projects')} className="active">Projects</NavItem>
              <NavItem onClick={() => browserHistory.push('/contact')}>Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <footer className="footer">
          <a href="https://www.linkedin.com/in/juliekaystokes/" className="linked"><img src="/assets/images/linkedIn.png" /></a>
        </footer>
      </div>
    )
  }
});

export default Projects;
