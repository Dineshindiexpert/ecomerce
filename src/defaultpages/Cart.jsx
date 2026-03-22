"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Cart as CartIcon, PatchMinus, PatchPlus } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {removeFromcartitems,incrementQty,decrementQty,} from "../store/slice/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const grandTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">
        <CartIcon className="me-2" />
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="lead text-center">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3 shadow-sm border-0">
              <Row className="align-items-center g-0 p-3">
                <Col xs={3} md={2}>
                  <Card.Img
                    src={item.thumbnail}
                    style={{ height: "80px", objectFit: "contain" }}
                  />
                </Col>

                <Col xs={9} md={3}>
                  <Card.Body className="py-0">
                    <Card.Title className="h6 mb-1">
                      {item.title}
                    </Card.Title>
                    <Card.Subtitle className="text-primary">
                      ₹{item.price}
                    </Card.Subtitle>
                  </Card.Body>
                </Col>

                
                <Col xs={6} md={3} className="text-center">
                  <Button
                   className=""
                    size="lg"
                    variant="secondary"
                    onClick={() => dispatch(decrementQty(item.id))}
                  >
                    <PatchMinus/>
                  </Button>

                  <span className="mx-2">{item.quantity}</span>

                  <Button
                   
                    size="lg"
                    variant="secondary"
                    onClick={() => dispatch(incrementQty(item.id))}
                  >
                    <PatchPlus/>
                  </Button>
                </Col>

                 
                <Col xs={6} md={2} className="text-end fw-bold">
                  ₹{item.price * item.quantity}
                </Col>

                
                <Col xs={12} md={2} className="text-end">
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() =>
                      dispatch(removeFromcartitems(item.id))
                    }
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}

          {/* ✅ Grand Total */}
          <div className="text-end mt-4">
            <h4 className="fw-bold">
              Total: ₹{grandTotal.toFixed(2)}
            </h4>

            <Button
              variant="warning"
              size="lg"
              className="text-white mt-2"
              style={{ backgroundColor: "#F67D31" }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;