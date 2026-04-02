import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/slice/WishlistSlice/";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { addToCart } from "../store/slice/CartSlice";

const Wishlist = () => {

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handlecart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product.id));
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">My Wishlist</h2>

      {wishlistItems.length > 0 ? (
        <Row>
          {wishlistItems.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4} className="mb-3">
              <Card className="p-3 h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="fw-bold">${item.price}</Card.Text>
                  <div className="d-flex justify-content-betwen gap-2">

                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => handlecart(item)}
                    >
                      Move to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Your wishlist is currently empty.</p>
      )}
    </Container>
  );
};

export default Wishlist;
