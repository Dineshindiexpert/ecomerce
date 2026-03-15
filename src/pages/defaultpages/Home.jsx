import React, { useState } from "react";
import {
  Accordion,
  Badge,
  Col,
  Container,
  Form,
  ListGroup,
  ProgressBar,
  Row,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Category, Price } from "../../db/comondatabase";
import { ChevronRight, CurrencyRupee, Tag } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import ProductCard from "../../components/Productcard";
import Products from "../../db/Products";
import Pagination from "../../components/Pagination";


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
              className="p-3 bg-white rounded shadow-sm"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >

              <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>

                {/* CATEGORY */}
                <Accordion.Item eventKey="0" className="border-0 mb-3">

                  <Accordion.Header>
                    <Tag className="me-2 text-primary" />
                    Categories
                  </Accordion.Header>

                  <Accordion.Body className="p-0">

                    <ListGroup variant="flush">

                      {Category.map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                        >
                          <ListGroup.Item
                            as={Link}
                            to={item.path}
                            action
                            className="d-flex justify-content-between align-items-center"
                          >
                            {item.name}
                            <ChevronRight size={14} />
                          </ListGroup.Item>
                        </motion.div>
                      ))}

                    </ListGroup>

                  </Accordion.Body>
                </Accordion.Item>


                {/* PRICE FILTER */}
                <Accordion.Item eventKey="1" className="border-0">

                  <Accordion.Header>
                    <CurrencyRupee className="me-2 text-success" />
                    Price Filter
                  </Accordion.Header>

                  <Accordion.Body>

                    {/* PRICE BADGES */}

                    <div className="d-flex flex-wrap gap-2 mb-3">

                      {Price.map((amount, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Form.Check
                            type="checkbox"
                            id={`price-${index}`}
                            label={
                              <Badge bg="light" text="dark" className="px-3 py-2">
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
                    />

                    {/* PRICE BAR */}

                    <ProgressBar
                      now={price}
                      className="mt-2"
                      label={`₹${price}`}
                    />

                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>

            </motion.div>

          </Col>


          {/* RIGHT PRODUCT AREA */}
          <Col md={9}>
            <h3>Hero section</h3>
            <div>
              <Pagination />
            </div>
            <h3 className="mb-3 text-center py-2">Our Products</h3>

            {/* HORIZONTAL SCROLL */}
            <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
              {Products.map((product) => (
                <div
                  key={product.id}
                  className="me-3"
                  style={{ minWidth: "220px" }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <h3 className="mb-3 text-center py-2">Our Products</h3>
            <div className="d-flex flex-row   overflow-auto pb-3">
              {Products.map((product) => (
                <div
                  key={product.id}
                  className="me-3"
                  style={{ minWidth: "220px" }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
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