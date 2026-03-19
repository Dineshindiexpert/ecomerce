"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Cart as CartIcon } from "react-bootstrap-icons";
import { apiService } from "../api";
import Loading from'../components/Loading'
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        // 1. Get the cart (FakeStoreAPI /carts returns an array of cart objects)
        const cartRes = await apiService.getallcart();
        const firstCart = cartRes.data[0];

        if (firstCart && firstCart.products) {
          // 2. Fetch full product details for each item in the cart
          const fullProductDetails = await Promise.all(
            firstCart.products.map(async (item) => {
              const productRes = await apiService.getSingleProduct(item.productId);
              return {
                ...productRes.data,
                quantity: item.quantity,
                total: productRes.data.price * item.quantity
              };
            })
          );
          setCartItems(fullProductDetails);
        }
      } catch (error) {
        console.error("Error fetching FakeStore cart:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, []);

  const grandTotal = cartItems.reduce((acc, item) => acc + item.total, 0);

  // if (loading) return <Container className="text-center my-5"><Spinner animation="border" /></Container>;

  return (<>
  {loading ? <Loading/> :
    <Container className="my-5">
      <h2 className="mb-4"><CartIcon className="me-2" />Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="lead text-center">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3 shadow-sm border-0">
              <Row className="align-items-center g-0 p-3">
                <Col xs={3} md={2}>
                  <Card.Img src={item.image} style={{ height: "80px", objectFit: "contain" }} />
                </Col>
                <Col xs={9} md={4}>
                  <Card.Body className="py-0">
                    <Card.Title className="h6 mb-1">{item.title}</Card.Title>
                    <Card.Subtitle className="text-primary">₹{item.price}</Card.Subtitle>
                  </Card.Body>
                </Col>
                <Col xs={6} md={2} className="text-center">Qty: {item.quantity}</Col>
                <Col xs={6} md={4} className="text-end fw-bold">₹{item.total.toFixed(2)}</Col>
              </Row>
            </Card>
          ))}
          <div className="text-end mt-4">
            <h4 className="fw-bold">Total: ₹{grandTotal.toFixed(2)}</h4>
            <Button variant="warning" size="lg" className="text-white mt-2" style={{ backgroundColor: "#F67D31" }}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
      </Container>}
  </>);
};

export default Cart;
