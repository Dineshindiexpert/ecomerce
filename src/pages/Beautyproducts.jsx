import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/Productcard';
import { Spinner } from 'react-bootstrap';

const Beautyproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeautyProducts = async () => {
      try {
        // Fetching specifically from the beauty category
        const response = await axios.get("https://dummyjson.com");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching beauty products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeautyProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading Beauty Products...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className='my-4'>
        <h3 className="fw-bold">Beauty Collection</h3>
        <p className="text-muted">Discover our premium beauty and skincare products.</p>
      </div>

      <div>
        {/* HORIZONTAL SCROLL - Featured */}
        <div className="d-flex flex-row flex-nowrap overflow-auto pb-3 custom-scrollbar">
          {products.map((product) => (
            <div
              key={product.id}
              className="me-3"
              style={{ minWidth: "250px" }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <h3 className="mb-4 mt-5 text-center py-2">All Beauty Products</h3>
        
        {/* GRID VIEW (Better for 'All Products' section) */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beautyproducts;
