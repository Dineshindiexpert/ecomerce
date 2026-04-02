"use client";
import React from "react";
import { Container, Row, Col, Card, Button, ProgressBar, NavLink, Nav } from "react-bootstrap";
import { CheckCircleFill, Truck } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link, useRouteError } from "react-router-dom";


const Orderpage = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);


    const shipping = 4.97;
    const tax = 0.39;


    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const total = subtotal + shipping + tax;

    return (
        <Container className="my-5">
            {/* HEADER */}
            <Row className="mb-4 align-items-center">
                <Col>
                    <h4 className="fw-bold">
                        Thank you for your order #3911690705825
                    </h4>
                </Col>
                <Col className="text-end">
                    <Button as={Link} to="/">
                        Continue Shopping
                    </Button>
                </Col>  
            </Row>

            {/* MAIN CARD */}
            <Card className="p-4 shadow-sm mb-4">
                <Row className="mb-3">
                    <Col>
                        <h6>
                            <Truck className="me-2" />
                            We'll send you an email with tracking information when your item ships.
                        </h6>
                    </Col>
                </Row>

                <Row>
                    {/* LEFT INFO */}
                    <Col md={4}>
                        <p className="mb-1"><strong>Order placed</strong></p>
                        <p className="mb-1 text-success">Arrives by Tue, April 10</p>
                        <p className="mb-1">Value shipping</p>
                        <p className="mb-1">Order #3911690705825</p>
                    </Col>

                     
                    <Col md={4}>
                        <p className="fw-bold mb-1">Shipping address</p>
                        <p className="mb-1">Dinesh</p>
                        <p className="mb-1">18 no street</p>
                        <p className="mb-1">India, Haryana 124001</p>
                        <p className="mb-1">usermail@gmail.com</p>
                    </Col>

                    {/* TRACKING */}
                    <Col md={4}>
                        <div className="text-center">
                            <CheckCircleFill color="green" size={24} />
                            <p className="mb-1">Order placed</p>

                            <ProgressBar now={25} className="mb-2" />

                            <div className="d-flex justify-content-between small">
                                <span>Placed</span>
                                <span>Processing</span>
                                <span>Shipped</span>
                                <span>Delivered</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <hr />

                
                {cartItems.length === 0 ? (
                    <p className="text-center">No items in order.</p>
                ) : (
                    cartItems.map((item) => (
                        <Row key={item.id} className="align-items-center mb-3">
                            <Col md={2}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="img-fluid"
                                    style={{ maxHeight: "80px", objectFit: "contain" }}
                                />
                            </Col>

                            <Col md={6}>
                                <p className="mb-1 fw-bold">{item.title}</p>
                                <small className="text-muted">Arrives soon</small>
                            </Col>

                            <Col md={2}>Qty: {item.quantity}</Col>

                            <Col md={2} className="text-end fw-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </Col>
                        </Row>
                    ))
                )}
            </Card>

            {/* BOTTOM SECTION */}
            <Row>
                {/* ORDER SUMMARY */}
                <Col md={4}>
                    <Card className="p-3 shadow-sm">
                        <h6>Order Summary</h6>

                        <Row>
                            <Col>Subtotal</Col>
                            <Col className="text-end">${subtotal.toFixed(2)}</Col>
                        </Row>

                        <Row>
                            <Col>Shipping</Col>
                            <Col className="text-end">${shipping.toFixed(2)}</Col>
                        </Row>

                        <Row>
                            <Col>Tax</Col>
                            <Col className="text-end">${tax.toFixed(2)}</Col>
                        </Row>

                        <hr />

                        <Row className="fw-bold">
                            <Col>Total</Col>
                            <Col className="text-end text-primary">${total.toFixed(2)}</Col>
                        </Row>
                    </Card>
                </Col>

                {/* PAYMENT */}
                <Col md={4}>
                    <Card className="p-3 shadow-sm">
                        <h6>Payment Type</h6>
                        <p className="mb-0">UPI Payment</p>
                    </Card>
                </Col>

                {/* BILLING */}
                <Col md={4}>
                    <Card className="p-3 shadow-sm">
                        <h6>Billing Address</h6>
                        <p className="mb-1">Dinesh</p>
                        <p className="mb-1">18 no. Street</p>
                        <p className="mb-1">India, Haryana 124001</p>
                        <p className="mb-1">usermail@gmail.com</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Orderpage;