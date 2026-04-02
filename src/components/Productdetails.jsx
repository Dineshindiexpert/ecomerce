import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import {StarFill,LightningFill,ArrowLeft,ShieldCheck,Truck,ArrowRepeat,Cart,Check2,} from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { apiService } from "../api";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slice/CartSlice";

const ProductDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

   
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      try {
        const res = await apiService.getSingleProduct(id);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
 
  const isInCart = cartItems?.some(
    (item) => item.id === product?.id
  );

  const handleCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <Loading />;

  if (!product) {
    return (
      <Container className="text-center py-5">
        <h2 className="display-4">Oops! Product Not Found</h2>
        <Button variant="primary" onClick={() => navigate("/")}>
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
          <Col lg={6} className="p-4 d-flex align-items-center justify-content-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "450px", objectFit: "contain" }}
            />
          </Col>

          <Col lg={6} className="p-4">
            <Badge bg="secondary" className="mb-2 text-capitalize">
              {product.category}
            </Badge>

            <h1 className="fw-bold h4">{product.title}</h1>

            <div className="d-flex align-items-center mb-3">
              <StarFill className="text-warning me-1" />
              {product.rating?.rate}
            </div>

            <h2 className="text-primary fw-bold">₹{product.price}</h2>

            <p className="text-muted small">{product.description}</p>

            <div className="d-flex gap-3 mt-4">
              {isInCart ? (
                <Button variant="success">
                  <Check2 /> Added to cart
                </Button>
              ) : (
                <Button onClick={handleCart} variant="outline-dark">
                  <Cart className="me-2" />
                  Add to Cart
                </Button>
              )}

              <Button variant="warning">
                <LightningFill className="me-2" />
                Buy
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ProductDetails;