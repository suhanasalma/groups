import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from '../../../Assests/brandLogo/whole.svg'
import { FaSearch } from "react-icons/fa";




const Header = () => {
  return (
    // <Navbar className="container" bg="deep-pink" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav ">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Form className="d-flex">
    //           <Form.Control
    //             type="search"
    //             placeholder="Search"
    //             className="me-2"
    //             aria-label="Search"
    //           />
    //           <Button variant="outline-success">Search</Button>
    //         </Form>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar className='bg-secondary'>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
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
            title="Create account. It’s free!"
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