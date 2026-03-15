import React from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { StarFill, Cart } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Products from "../../db/products"; // your product array
import ProductCard from "../components/Productcard";  // use the ProductCard we built

const ProductsGrid = () => {
  return (
    <div className="overflow-auto" style={{ height: "80vh" }}>
      {/* Each category or product row */}
      <h5 className="mb-3">Featured Products</h5>

      <div className="d-flex overflow-auto gap-3 mb-4">
        {Products.slice(0, 10).map((product) => (
          <div key={product.id} style={{ minWidth: "250px", flex: "0 0 auto" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <h5 className="mb-3">Best Sellers</h5>
      <div className="d-flex overflow-auto gap-3 mb-4">
        {Products.slice(10, 20).map((product) => (
          <div key={product.id} style={{ minWidth: "250px", flex: "0 0 auto" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;