// src/pages/Cart.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, CloseButton } from "react-bootstrap";
import Products  from "../db/Products"; // make sure path is correct
import { Cart as CartIcon } from "react-bootstrap-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
   
  const [cartItems, setCartItems] = useState(
    Products.slice(0, 3).map((product) => ({
      ...product,
      quantity: 1, // default quantity
    }))
  );

  const handleQuantityChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(value) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      {/* <Header/> */}
      <h2 className="mb-4">
        <CartIcon className="me-2" />
        Shopping Cart
      </h2>
      {/* cart items here... */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3 shadow-sm">
              <Row className="align-items-center g-0">
                <Col md={2}>
                  <Card.Img
                    src={item.image}
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                </Col>
                <Col md={4}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="text-muted">
                      ₹{item.price}
                    </Card.Subtitle>
                  </Card.Body>
                </Col>
                <Col md={3}>
                  <Form.Control
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </Col>
                <Col md={2}>
                  <Card.Body>
                    <strong>₹{item.price * item.quantity}</strong>
                  </Card.Body>
                </Col>
                <Col md={1}>
                  <Button
                    variant=" "
                    size="lg"
                    onClick={() => handleRemove(item.id)}
                    className="rounded-circle"
                  >
                    <CloseButton/>
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}

          <h4 className="mt-4">Total: ₹{totalPrice}</h4>
          <Button variant="success">Proceed to Checkout</Button>
        </>
      )}
      {/* <Footer/> */}
    </Container>
  );
};

export default Cart;