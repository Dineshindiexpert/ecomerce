import React, { useState } from "react";
import {Accordion,Badge,Col,Container,Form,ListGroup,ProgressBar,Row} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Category, Price } from "../db/comondatabase";
import { ChevronRight, CurrencyRupee, Tag } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
 


const Home = () => {
  const [price, setPrice] = useState(50);

  return (
    <div style={{ backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      <Container fluid="lg">
        <Header />

        <Row className="mt-3">

          {/* LEFT SIDEBAR */}
          <Col md={3}>
            <motion.div
              className="p-3 bg-white rounded-4 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>

                {/* CATEGORY */}
                <Accordion.Item eventKey="0" className="border-0 mb-4">
                  <Accordion.Header>
                    <Tag className="me-2 text-primary fs-5" />
                    <span className="fw-semibold">Categories</span>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ListGroup variant="flush">
                      {Category.map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 8 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <ListGroup.Item
                            as={Link}
                            to={item.path}
                            action
                            className="d-flex justify-content-between align-items-center border-0 py-2 px-3 rounded-3 mb-1 hover-shadow"
                            style={{ transition: "all 0.2s" }}
                          >
                            {item.name}
                            <ChevronRight size={16} />
                          </ListGroup.Item>
                        </motion.div>
                      ))}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                {/* PRICE FILTER */}
                <Accordion.Item eventKey="1" className="border-0">
                  <Accordion.Header>
                    <CurrencyRupee className="me-2 text-success fs-5" />
                    <span className="fw-semibold">Price Filter</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* PRICE BADGES */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {Price.map((amount, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }}>
                          <Form.Check
                            type="checkbox"
                            id={`price-${index}`}
                            label={
                              <Badge
                                bg="light"
                                text="dark"
                                className="px-3 py-2 shadow-sm rounded-pill"
                              >
                                ₹{amount}
                              </Badge>
                            }
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* PRICE RANGE SLIDER */}
                    <Form.Range
                      min={10}
                      max={100}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="mb-2"
                    />

                    {/* PRICE BAR */}
                    <ProgressBar
                      now={price}
                      variant="primary"
                      className="rounded-pill"
                      label={`₹${price}`}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </Col>


          {/* RIGHT PRODUCT AREA */}
          <Col md={9}>
            <Outlet />
          </Col>

        </Row>

      </Container>
      <div >
        <Row className="px-5" >
          <Footer />
        </Row>
      </div>

    </div>
  );
};

export default Home;