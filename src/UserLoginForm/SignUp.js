import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import signup from '../Assests/signup/signup.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { SharedContext } from '../AuthContext/AuthContext';



const SignUp = ({ show, fullscreen, setShow, setLoginShow }) => {
   const { googleSignIn, createUser } = useContext(SharedContext);
   const navigate = useNavigate();


  const handleSwitch = () => {
    setLoginShow(true);
    setShow(false);
  };

    const handleCreate = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      console.log(email, password, firstName, lastName);
      createUser(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    };

  //handle google sign in
  const handleGoogle = () => {
    googleSignIn()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        //   navigate('/')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };

  return (
    <div>
      <Modal
        size="lg"
        centered
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
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
              <Form onSubmit={handleCreate}>
                <div className="d-flex">
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Control
                      className="p-2"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      className="p-2"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                    />
                  </Form.Group>
                </div>
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
                <div>
                  <div>
                    <Button
                      className="bg-darkBlue w-100 rounded-pill text-white my-4"
                      variant="primary"
                      type="submit"
                    >
                      Create Account
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="border w-100 rounded"
                      variant="primary"
                      type="submit"
                    >
                      <FaFacebook className="text-darkBlue" />{" "}
                      <span className="ms-2">Sign up with Facebook</span>
                    </Button>
                  </div>
                  <div>
                    <Button
                      onClick={handleGoogle}
                      className="border w-100 rounded my-4"
                      variant="primary"
                      type="submit"
                    >
                      <FcGoogle />
                      <span className="ms-2">Sign up with Google</span>
                    </Button>
                  </div>
                </div>
              </Form>
            </Col>
            <Col lg="6">
              <p>
                Already have an account?
                <Link>
                  <span
                    onClick={() => handleSwitch()}
                    className="text-darkBlue"
                  >
                    {" "}
                    Sign In
                  </span>
                </Link>
              </p>
              <img src={signup} className="w-50" alt="" />
              <p>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignUp;