import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import signup from "../Assests/signup/signup.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { SharedContext } from "../AuthContext/AuthContext";

const Login = ({ loginShow, logfullscreen, setLoginShow, setShow }) => {
  const { googleSignIn, signIn } = useContext(SharedContext);
  const navigate = useNavigate()

  //handling modal
  const handleSwitch = () => {
    setLoginShow(false);
    setShow(true);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
   
  };
  //handle google sign in
  const handleGoogle = () => {
    googleSignIn()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        navigate('/')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // ..
      });
  };

  return (
    <div>
      <Modal
        size="lg"
        //  aria-labelledby="contained-modal-title-vcenter"
        centered
        show={loginShow}
        fullscreen={logfullscreen}
        onHide={() => setLoginShow(false)}
      >
        <Modal.Header closeButton>
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </Modal.Header>

        <Modal.Body>
          <Row className="">
            <Col lg="6" className="">
              <h4>Create Account</h4>
              <Form onSubmit={handleSignIn}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="p-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    className="p-2"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>
                <Button
                  className="bg-darkBlue w-100 rounded-pill text-white my-4"
                  variant="primary"
                  type="submit"
                >
                  Sign In
                </Button>
                <Button
                  className="border w-100 rounded"
                  variant="primary"
                  type="submit"
                >
                  <FaFacebook className="text-darkBlue" />{" "}
                  <span className="ms-2">Sign up with Facebook</span>
                </Button>
                <Button
                  className="border w-100 rounded my-4"
                  variant="primary"
                  type="submit"
                  onClick={handleGoogle}
                >
                  <FcGoogle />
                  <span className="ms-2">Sign up with Google</span>
                </Button>
              </Form>
            </Col>
            <Col lg="6">
              <p>
                Don’t have an account yet?
                <Link>
                  <span
                    onClick={() => handleSwitch()}
                    className="text-darkBlue"
                  >
                    {" "}
                    Create new for free!
                  </span>
                </Link>
              </p>
              <img src={signup} className="w-50" alt="" />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
