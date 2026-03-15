import React, { useState } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../assets/images/homebanner.webp";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
 const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();  

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
       
      navigate("/Home");
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
              E-Commerce Store
            </motion.h1>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your one-stop shop for everything you love!
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
                    Login / Sign In
                  </Card.Title>

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label className="small text-white">
                        Username or Email
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter email"
                      />
                      <Form.Control.Feedback type="invalid" className="text-white">
                        Please enter your credentials.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                      <Form.Label className="small text-white">
                        Password
                      </Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback type="invalid" className="text-white">
                        Password is required.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      type="submit"
                       
                      className="w-100 py-2 fw-bold"
                      style={{ backgroundColor: "#F67D31", border: "none" }}
                    >
                      LOGIN
                    </Button>

                    <div className="text-center mt-3">
                      <Link
                        to="/signup"
                        className="text-white text-decoration-none fw-semibold"
                      >
                        New user? Sign up
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

export default Login;