import React from 'react';
import './NavbarPart.css';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const NavbarPart = () => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ color: 'black' }}>
            <img
              alt=""
              src="https://i.ibb.co/377kyQz/logo-removebg-preview.png"
              width="100"
              height="40"
              className="d-inline-block align-top"
            /> <b>E-Learning</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>  
            <FormControl type="text" placeholder="Search for anything" className="mr-sm-7" />   
          </Form>
          <Nav className="ml-auto">            
            <Nav.Link
              className="mr-3">
                <NavLink to="/" style={{ color: 'gray' }}>Home</NavLink>
            </Nav.Link>
            <Nav.Link
              className="mr-3">
                <NavLink to="/coursesearch" style={{ color: 'gray' }}>Courses</NavLink>
            </Nav.Link>
            {/* <Nav.Link
              className="mr-3">
              Courses
            </Nav.Link> */}
            <Nav.Link
              className="mr-3">
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="mr-2"
              href="#">
               <Button
                className="pl-5 pr-5"
                variant="outline-secondary">
                Login
                </Button>
              </Nav.Link>
            <Nav.Link
              className="mr-3"
              href="#link">
              <Button
                className="pl-5 pr-5"
                variant="dark">
                SignUp
                </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarPart;