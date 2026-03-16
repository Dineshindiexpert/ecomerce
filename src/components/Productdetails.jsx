import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Badge, Card, ListGroup } from "react-bootstrap";
import { StarFill, CartPlus, LightningFill, ArrowLeft, ShieldCheck, Truck, ArrowRepeat } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import ProductsData from "../db/Products"; // Name change kiya confusion se bachne ke liye

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Slug matching logic - ProductsData use kiya yahan
  const currentProduct = ProductsData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "") === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!currentProduct) {
    return (
      <Container className="text-center py-5">
        <h2 className="display-4">Oops! Product Not Found</h2>
        <Button variant="primary" onClick={() => navigate("/")} className="mt-3">
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-light min-vh-100 py-5">
      <Container>
        <Button 
          variant="link" 
          className="text-dark text-decoration-none mb-4 p-0 d-flex align-items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="me-2" /> Back to Shop
        </Button>

        <Row className="bg-white rounded-4 shadow-sm overflow-hidden g-0">
          <Col lg={6} className="p-4 p-md-5 border-end d-flex align-items-center justify-content-center bg-white">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={currentProduct.image}
              alt={currentProduct.title}
              className="img-fluid"
              style={{ maxHeight: "450px", objectFit: "contain" }}
            />
          </Col>

          <Col lg={6} className="p-4 p-md-5">
            <div className="mb-3">
              <Badge bg="secondary" className="text-capitalize px-3 py-2 mb-2">
                {currentProduct.category}
              </Badge>
              <h1 className="fw-bold text-dark h2">{currentProduct.title}</h1>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="bg-success text-white px-2 py-1 rounded d-flex align-items-center me-2">
                <span className="fw-bold me-1">{currentProduct.rating?.rate}</span>
                <StarFill size={14} />
              </div>
              <span className="text-muted border-start ps-2">
                {currentProduct.rating?.count} Ratings & Reviews
              </span>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-baseline gap-2">
                <h2 className="text-primary fw-bold display-6">₹{currentProduct.price}</h2>
                 
              </div>
            </div>

            <hr />

            <div className="my-4">
              <h5 className="fw-bold">Product Description</h5>
              <p className="text-muted small lh-base">{currentProduct.description}</p>
            </div>

            <Row className="g-2 mb-4 text-center">
              <Col xs={4}><div className="p-2 border rounded bg-light" style={{fontSize: '9px'}}><Truck size={18}/><br/>FAST DELIVERY</div></Col>
              <Col xs={4}><div className="p-2 border rounded bg-light" style={{fontSize: '9px'}}><ArrowRepeat size={18}/><br/>7 DAYS RETURN</div></Col>
              <Col xs={4}><div className="p-2 border rounded bg-light" style={{fontSize: '9px'}}><ShieldCheck size={18}/><br/>SECURE</div></Col>
            </Row>

            <div className="d-flex gap-3">
              <Button variant="outline-dark" className="flex-grow-1 py-2 fw-bold"><CartPlus className="me-2"/> CART</Button>
              <Button variant="warning" className="flex-grow-1 py-2 fw-bold text-white" style={{backgroundColor: "#F67D31", border: "none"}}><LightningFill className="me-2"/> BUY</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ProductDetails;
