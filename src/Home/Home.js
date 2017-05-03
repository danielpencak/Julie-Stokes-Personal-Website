import React, { Component } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import { Grid, Row, Col, MenuItem, Nav, NavDropdown, NavItem, Navbar, Glyphicon } from 'react-bootstrap';
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
          <Row className="show-grid" className="summaryRow">
            <Col xs={12} className="summary">
              <div className="list">
                <Glyphicon glyph="list-alt" />
              </div>
              <h3 className="summaryHeader">Summary</h3>
              <p className="sumText">
                I have a proven record for success on projects focusing on value stream, business processes, and continuous improvement. My current working environment is fast-paced, prioritizing multiple deadlines and ad hoc ambiguous requests. I'm looking for a compnay with passion for innovation and a team built on a culture of collaboration, creativity, and customer-centric solutions.
              </p>
            </Col>
          </Row>
          <Row className="show-grid" className="about">
            <Col xs={12} sm={6} md={3} className="education">
              <div className="list">
                <Glyphicon glyph="education" />
              </div>
              <h3 className="educationHeader">Education</h3>
              <p className="educationText">
                <div className="college">
                  Bachelor of Science, Industrial Technology, <br/>
                  California Polytechnic State University, <br/>
                  San Luis Obispo, CA
                </div>
                <div>
                  Project Management Professional Certification, <br/>
                  Project Management Institute
                </div>
              </p>
            </Col>
            <Col xs={12} sm={6} md={3} className="expertise">
              <div className="list">
                <Glyphicon glyph="briefcase" />
              </div>
              <h3 className="expertiseHeader">Expertise</h3>
              <p className="expertiseText">
                Project Management <br/>
                Business Process Improvement <br/>
                Cross-Functional Collaboration <br/>
                Stakeholder Engagement <br/>
                Executive Presentations <br/>
                Develop/Execute Training Plans <br/>
                Develop Professional Templates
              </p>
            </Col>
            <Col xs={12} sm={6} md={3} className="techniques">
              <div className="list">
                <Glyphicon glyph="cog" />
              </div>
              <h3 className="techniquesHeader">Techniques</h3>
              <p className="techniquesText">
                Value Stream Mapping <br/>
                5S Methodologies <br/>
                Kaizen (Continuous Improvement) <br/>
                Partnering <br/>
                Excel Pivot Tables <br/>
                Excel Formulas/Functions
              </p>
            </Col>
            <Col xs={12} sm={6} md={3} className="tools">
              <div className="list">
                <Glyphicon glyph="wrench" />
              </div>
              <h3 className="toolsHeader">Tools</h3>
              <p className="toolsText">
                ProjectManagement Body of Knowledge (PMBOK) <br/>
                MS Excel <br/>
                MS PowerPoint <br/>
                MS Project <br/>
                MS Word <br/>
                MS Outlook <br/>
                MS SharePoint <br/>
                Skype <br/>
                WebEx
              </p>
            </Col>
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
