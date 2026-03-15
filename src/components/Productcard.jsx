import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { StarFill, Cart, LightningFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const title = product.title || "";
  const category = product.category || "Unknown";
  const price = product.price || 0;
  const rating = product.rating || { rate: 0, count: 0 };
  const image = product.image || "";

  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <Card className="h-100 border-0 shadow-sm rounded-4">

        {/* IMAGE */}
        <div className="bg-light p-3 text-center position-relative">

          <Badge
            bg="dark"
            className="position-absolute top-0 start-0 m-2 text-capitalize"
          >
            {category}
          </Badge>

          <Card.Img
            src={image}
            style={{ height: "180px", objectFit: "contain" }}
          />
        </div>

        {/* BODY */}
        <Card.Body className="d-flex flex-column">

          <Card.Title className="fw-semibold small">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </Card.Title>

          {/* RATING */}
          <div className="d-flex align-items-center mb-2">
            <StarFill className="text-warning me-1" />
            <small className="text-muted">
              {rating.rate} ({rating.count})
            </small>
          </div>

          {/* PRICE */}
          <h5 className="text-primary fw-bold mb-3">₹{price}</h5>

          {/* BUTTONS */}
          <div className="d-grid gap-2 mt-auto">

            <Button variant="outline-dark">
              <Cart className="me-2" />
              Add to Cart
            </Button>

            <Button variant="warning">
              <LightningFill className="me-2" />
              Buy Now
            </Button>

          </div>

        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;