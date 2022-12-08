import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../../../Assests/brandLogo/whole.svg";
import { NavLink } from "react-router-dom";
import SignUp from "../../../UserLoginForm/SignUp";
import Login from "../../../UserLoginForm/Login";
import { SharedContext } from "../../../AuthContext/AuthContext";
import { Dropdown, DropdownButton } from "react-bootstrap";
import './Header.css'

const Header = () => {
  //valus for signup
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  //values for login
  const [logfullscreen, setLogFullscreen] = useState(true);
  const [loginShow, setLoginShow] = useState(false);

  const { user, logOut } = useContext(SharedContext);

  const values = ["md-down"];

  //handling modal for signup
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  //handling modal for login
  function handleLoginShow(breakpoint) {
    setLogFullscreen(breakpoint);
    setLoginShow(true);
  }

  //handleLogout
  const signOut = ()=>{
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });

  }





  return (
    <div>
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
            {user?.uid ? (
              <div className="d-flex ">
                <img
                  className=" userImg"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.pinimg.com/736x/7e/0a/45/7e0a4586ea352e655c0a100ad0f68bdb.jpg"
                  }
                  alt=""
                />
                <DropdownButton
                  id="dropdown-basic-button"
                  title={user?.displayName}
                >
                  <Dropdown.Item href="#/action-1">
                    <button className="border-0 " onClick={signOut}>
                      Logout
                    </button>
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            ) : (
              <NavDropdown
                title="Create account.It’s free!"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      SignUp
                    </Button>
                  ))}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleLoginShow(v)}
                    >
                      Login
                    </Button>
                  ))}
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* modal */}
      <SignUp
        setLoginShow={setLoginShow}
        show={show}
        fullscreen={fullscreen}
        setShow={setShow}
      />
      <Login
        loginShow={loginShow}
        logfullscreen={logfullscreen}
        setLoginShow={setLoginShow}
        setShow={setShow}
      />
    </div>
  );
};

export default Header;
