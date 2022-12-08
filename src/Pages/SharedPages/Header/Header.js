import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from '../../../Assests/brandLogo/whole.svg'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';




const Header = () => {
  return (
    <Navbar className="bg-secondary">
      <Container>
        <NavLink to="/">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-evenly">
          <Form className="d-flex w-25 ">
            <Form.Control
              type="search"
              placeholder="&#xf002; Search for your favorite groups in ATG"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
          </Form>
          <NavDropdown
            title="Create account.It’s free!"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Signup</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;