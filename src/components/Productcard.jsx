import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { StarFill, Cart, LightningFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const title = product.title || "";
  const category = product.category || "Unknown";
  const price = product.price || 0;
  const rating = product.rating || { rate: 0, count: 0 };
  const image = product.image || "";


  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">

        {/* Image Section: Wrap with Link */}
        <Link to={`/product/${slug}`} style={{ textDecoration: 'none' }}>
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
        </Link>

        {/* BODY */}
        <Card.Body className="d-flex flex-column">


          <Link to={`/product/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Title className="fw-semibold small">
              {title.length > 50 ? title.slice(0, 50) + "..." : title}
            </Card.Title>
          </Link>

          {/* RATING */}
          <div className="d-flex align-items-center mb-2 justify-content-between">
            <div>

              <StarFill className="text-warning me-1" />
              <small className="text-muted">
                {rating.rate} ({rating.count})
              </small>
            </div>
            <div>

              {/* PRICE */}
              <h5 className="text-primary fw-bold mb-3 align-items-center">₹{price}</h5>
            </div>
          </div>




          {/* BUTTONS */}
          <div className="d-grid gap-2 mt-auto">
            <Button variant="outline-dark">
              <Cart className="me-2" />
              Add to Cart
            </Button>


            <Link to={`/product/${slug}`} className="d-grid text-decoration-none">
              <Button variant="warning" className="w-100">
                <LightningFill className="me-2" />
                Buy Now
              </Button>
            </Link>
          </div>

        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
