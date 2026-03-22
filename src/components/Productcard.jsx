import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { StarFill, Cart, LightningFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/slice/Wishlistslice";
import { addToCart } from "../store/slice/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleButtonClick = (product) => {
    dispatch(addToWishlist(product));
  };
  if (!product) return null;


  const productLink = `/product/${product.id}`;

  return (
    <motion.div whileHover={{ scale: 1.04 }} className="h-100">
      <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">

        {/* Product Image */}
        <Link to={productLink} style={{ textDecoration: "none" }}>
          <div className="bg-light p-3 text-center position-relative">
            <Badge bg="dark" className="position-absolute top-0 start-0 m-2 text-capitalize">
              {product.category}
            </Badge>
            <Card.Img
              src={product.image}
              style={{ height: "180px", objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* Product Info */}
        <Card.Body className="d-flex flex-column">
          <Link to={productLink} style={{ textDecoration: "none", color: "inherit" }}>
            <Card.Title className="fw-semibold small">
              {product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title}
            </Card.Title>
          </Link>

          <div className="d-flex align-items-center mb-2 justify-content-between">
            <div>
              <StarFill className="text-warning me-1" />
              <small className="text-muted">{product.rating?.rate}</small>
            </div>
            <h5 className="text-primary fw-bold mb-0">₹{product.price}</h5>
          </div>

          <div className="d-grid gap-2 mt-auto">
            <Button onClick={() => handleButtonClick(product)} variant="outline-danger"> Wishlist</Button>
            <Button
              onClick={() => dispatch(addToCart(product))}
              variant="outline-dark"><Cart className="me-2" /> Add to Cart</Button>
            <Link to={productLink} className="d-grid text-decoration-none">
              <Button variant="warning"><LightningFill className="me-2" /> Buy Now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;