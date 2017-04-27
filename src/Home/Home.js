import React, { Component } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import { Grid, Row, Col, MenuItem, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap';
import createReactClass from 'create-react-class';
import { browserHistory } from 'react-router';

const Home = createReactClass({
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
              <NavItem onClick={() => browserHistory.push('/')} className="active">Home</NavItem>
              <NavItem onClick={() => browserHistory.push('/projects')}>Projects</NavItem>
              <NavItem onClick={() => browserHistory.push('/contact')}>Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>Summary</Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={3}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={12} sm={6} md={3}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={12} sm={6} md={3}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={12} sm={6} md={3}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
          </Row>
        </Grid>
        <footer className="footer">
          <a href="https://www.linkedin.com/in/juliekaystokes/" className="linked"><img src="/assets/images/linkedIn.png" /></a>
        </footer>
      </div>
    )
  }
});

export default Home;
