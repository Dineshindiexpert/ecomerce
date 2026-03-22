// src/components/Header.js
import React from "react";
import { Container, Nav, Navbar, InputGroup, Form, Badge } from "react-bootstrap";
import { Cart, Heart, Search } from "react-bootstrap-icons";
import Hoverdropdown from "./Hoverdropdown";
import { Category, Profile } from "../db/comondatabase";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Navbar expand="lg" sticky="top" className="py-3" bg='transparent'>
      <Container>

        {/* Logo */}
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          <span className="text-dark">E</span>
          <span className="text-primary">Commerce</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          {/* Center Menu */}
          <Nav className="mx-auto fw-semibold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Hoverdropdown title="Our Products" objectvalue={Category} />
          </Nav>

          {/* Right Section */}
          <Nav className="align-items-center gap-3">

            {/* Search */}
            <InputGroup style={{ width: "260px" }}>
              <Form.Control placeholder="Search products..." className="border-end-0 shadow-none" />
              <InputGroup.Text className="bg-white border-start-0">
                <Search />
              </InputGroup.Text>
            </InputGroup>

            {/* Wishlist */}
            <Nav.Link as={Link} to='/wishlist' className="icon-btn position-relative">
              <Heart size={20} />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                {wishlistItems.length}
              </Badge>
            </Nav.Link>

            {/* Cart */}
            <Nav.Link as={Link} to="/cart" className="position-relative icon-btn">
              <Cart size={22} />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                {cartItems.length}
              </Badge>
            </Nav.Link>

            {/* Profile Dropdown */}
            <Hoverdropdown title="Profile" objectvalue={Profile} />

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;