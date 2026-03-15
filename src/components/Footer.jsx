import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "react-bootstrap-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer style={{ background: "#0f172a", color: "#fff", marginTop: "60px" }}>
      <div className="p-5">

        <Row>

          {/* BRAND / ABOUT */}
          <Col md={4} className="mb-4">
            <motion.div whileHover={{ y: -4 }}>
              <h4 className="mb-3">MyStore</h4>
              <p style={{ color: "#cbd5f5" }}>
                Discover the best products at unbeatable prices.  
                We focus on quality, fast delivery, and great customer service.
              </p>
            </motion.div>
          </Col>

          {/* QUICK LINKS */}
          <Col md={2} className="mb-4">
            <h5 className="mb-3">Quick Links</h5>

            <ul className="list-unstyled footer-links">
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* SUPPORT */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Customer Support</h5>

            <ul className="list-unstyled footer-links">
              <li>Help Center</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>

          {/* NEWSLETTER */}
          <Col md={3}>
            <h5 className="mb-3">Subscribe</h5>

            <Form>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="mb-2"
              />
              <Button variant="primary" size="sm">
                Subscribe
              </Button>
            </Form>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 mt-3">

              <motion.div whileHover={{ scale: 1.2 }}>
                <Facebook size={20} />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <Instagram size={20} />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <Twitter size={20} />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <Linkedin size={20} />
              </motion.div>

            </div>
          </Col>

        </Row>

        <hr style={{ borderColor: "#334155" }} />

        {/* COPYRIGHT */}
        <div className="text-center" style={{ color: "#94a3b8" }}>
          © {new Date().getFullYear()} MyStore. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;