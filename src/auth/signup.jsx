import React, { useState } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../assets/images/homebanner.webp";

const Signup = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="w-100">

          {/* Left Section */}
          <Col
            md={7}
            className="d-flex flex-column justify-content-center align-items-center text-center text-white"
          >
            <motion.h1
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Our Community
            </motion.h1>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Create your account and start shopping today!
            </motion.p>
          </Col>

          {/* Right Section */}
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: -50, right: 50 }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                className="shadow border-0 p-4 rounded-4"
                style={{ width: "400px", backgroundColor: "#DE1A58" }}
              >
                <Card.Body>
                  <Card.Title className="text-center text-white mb-4 fw-bold">
                    Sign Up
                  </Card.Title>

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label className="small text-white">Username</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter username"
                      />
                      <Form.Control.Feedback type="invalid" className="text-white">
                        Username is required.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className="small text-white">Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                      />
                      <Form.Control.Feedback type="invalid" className="text-white">
                        Valid email is required.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                      <Form.Label className="small text-white">Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback type="invalid" className="text-white">
                        Password is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* confirm password */}

                    <Form.Group className="mb-4" controlId="confirmpassword">
                      <Form.Label className="small text-white"> confirm Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback type="invalid" className="text-white">
                        Password not matched.
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* otp validate*/}

                    <Form.Group className="mb-4" controlId="otp">
                      <Form.Label className="small text-white">Enter otp here..</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="otp"
                      />
                      <Form.Control.Feedback type="invalid" className="text-white">
                        otp must be required.
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Button
                      type="submit"
                      className="w-100 py-2 fw-bold"
                      style={{ backgroundColor: "#F67D31", border: "none" }}
                    >
                      SIGN UP
                    </Button>

                    <div className="text-center mt-3">
                      <span className="text-white me-2">Already have an account?</span>
                      <Link
                        to="/login"
                        className="text-white text-decoration-none fw-semibold"
                      >
                        Login
                      </Link>
                    </div>

                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Signup;