import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Jumbotron,Container, Row, Col, Image, Button,} from 'react-bootstrap';
import './Home.css';
//import office from '../office.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <Navbar  bg="primary" expand="lg" default collapseOnSelect>
         <Navbar.Brand href="/">
         Corporate TimeOff 
         </Navbar.Brand>
            <Nav className="ml-auto">
            
            <Nav.Link className="link" href="/Signin"><Button className="signin-btn">Sign In</Button></Nav.Link>
            <Nav.Link className="pricing" href="/dashboard"><Button>Dashboard</Button></Nav.Link>
            </Nav>
     </Navbar>
     </div>
      <Container>
        <Jumbotron>
              <h2>Corporate TimeOff</h2>
              <p>Open source,simple yet powerful timeoff managements software for small and medium size business.</p>
              <p>Endorsed by hundreds of software developers.</p>
              <Link to="signup">
                  <Button bsStyle="primary" href="/signup"> Sign Up</Button>
              </Link>
          </Jumbotron>
          <Row className="show-grid text-center">
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/family.jpg" circle className="profile-pic" roundedCircle/>
                   <h4>Family</h4>
                   <p>To spend more time with your family.</p>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/healthcare.jpg" circle className="profile-pic" roundedCircle/>
                   <h4>Healthcare</h4>
                   <p>Going for a thorough medical checkup at your own convenient time.</p>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/maternity.jpg" circle className="profile-pic" roundedCircle/>
                   <h4>Maternity</h4>
                   <p>Planning to welcome a child.</p>
                  
               </Col>
          </Row>
          <h5>Planning your timeoff...</h5>
          <footer>&copy;Corporate TimeOff 2019</footer>
          </Container>
            </div>
    )
  }
}
