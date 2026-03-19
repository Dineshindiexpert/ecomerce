import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { StarFill, Cart, LightningFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 1. Accept 'product' as a prop from the parent (the list)
const ProductCard = ({ product }) => {
  
  // 2. Safety check: if product isn't loaded yet, don't crash
  if (!product) return null;

  // 3. Create slug from the single product title
  const slug = product.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  return (
    <motion.div whileHover={{ scale: 1.04 }} className="h-100">
      <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
        
        {/* Image Section */}
        <Link to={`/product/${slug}`} style={{ textDecoration: 'none' }}>
          <div className="bg-light p-3 text-center position-relative">
            <Badge bg="dark" className="position-absolute top-0 start-0 m-2 text-capitalize">
              {product.category}
            </Badge>
            <Card.Img
              src={product.image} // DummyJSON uses 'thumbnail' or 'images[0]'
              style={{ height: "180px", objectFit: "contain" }}
            />
          </div>
        </Link>

        <Card.Body className="d-flex flex-column">
          <Link to={`/product/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Title className="fw-semibold small">
              {product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title}
            </Card.Title>
          </Link>

          <div className="d-flex align-items-center mb-2 justify-content-between">
            <div>
              <StarFill className="text-warning me-1" />
              <small className="text-muted">
                {product.rating?.rate} ({product.rating?.count})
              </small>
            </div>
            <h5 className="text-primary fw-bold mb-0">₹{product.price}</h5>
          </div>

          <div className="d-grid gap-2 mt-auto">
            <Button variant="outline-dark">
              <Cart className="me-2" /> Add to Cart
            </Button>
            <Link to={`/product/${slug}`} className="d-grid text-decoration-none">
              <Button variant="warning">
                <LightningFill className="me-2" /> Buy Now
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
