import React from 'react';
import './NavbarPart.css';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


const NavbarPart = () => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
          <Form style={{width: "400px"}} className="ml-5">  
            <FormControl type="text" placeholder="Search for anything" style={{width: "100%"}} className="mr-3" />   
          </Form>
          <Nav className="ml-auto">            
            <Nav.Link
              className="mr-3 mt-1">
                <NavLink to="/" style={{ color: 'gray' }}>Home</NavLink>
            </Nav.Link>
            <Nav.Link
              className="mr-3 mt-1">
                <NavLink to="/coursesearch" style={{ color: 'gray' }}>Courses</NavLink>
            </Nav.Link>
            {/* <Nav.Link
              className="mr-3">
              Courses
            </Nav.Link> */}
            <Nav.Link
              className="mr-3 mt-1">
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="mr-3 mt-1">
                <Link to="/cart" style={{color: "gray"}}>
                <FontAwesomeIcon
                  className="mt-1"
                  icon={faShoppingCart} />
                  {
                    cartItems.length > 0 && (
                      <div className="position-absolute top-0 left-50 translate-middle badge bg-danger rounded-circle" style={{color: "white"}}>
                        {cartItems.length}
                      </div>
                    )
                  }
                  
                </Link>
                {/* <NavLink to="/coursesearch" className="ml-1" style={{ color: 'gray' }}>Cart</NavLink> */}
            </Nav.Link>
            <Nav.Link className="mr-2">
              <Link to="/login">
               <Button
                className="pl-5 pr-5"
                variant="outline-secondary">
                    Login
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link className="mr-3">
              <Link to="/signup">
                <Button
                  className="pl-5 pr-5"
                  variant="dark">
                  SignUp
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarPart;