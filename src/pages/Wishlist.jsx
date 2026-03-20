import React, { useContext } from "react";
// import { WishlistContext } from "../Context";
import { Container, Card, Button } from "react-bootstrap";

const Wishlist = () => {

  return (
    <Container className="my-5">
      <h2> my Wishlist</h2>


      <Card key={1} className="mb-3 p-3">
        <h6>fist card</h6>
        <p>₹15000</p>
        <Button variant="danger" >
          Remove
        </Button>
      </Card>


    </Container>
  );
};

export default Wishlist;