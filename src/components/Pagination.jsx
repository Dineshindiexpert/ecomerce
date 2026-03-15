// src/components/Pagination.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/girlimage.jpg";
import image2 from "../assets/images/secondimage.jpg";
import image3 from "../assets/images/thirdimage.jpg";

function Pagination() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Pagination;