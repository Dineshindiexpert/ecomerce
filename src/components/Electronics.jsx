import React, { useEffect, useState } from 'react'
import ProductCard from './Productcard'
import { apiService } from '../api';
import Loading from './Loading';

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiService.getProducts();
        setProducts(res.data);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // if (loading) return <p>Loading...</p>;

  return (<>{ loading ? <Loading/> :   <div>
    <div className='my-4'>
      <h3 className='my-3'>India's best technology here</h3>
    </div>

    {/* Horizontal scroll section */}
    <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="me-3"
          style={{ minWidth: "220px" }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>

    <h3 className="mb-3 text-center py-2">Our product</h3>

    {/* Second section */}
    <div className="d-flex flex-row overflow-auto pb-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="me-3"
          style={{ minWidth: "220px" }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>}
  </>
  );
};

export default Electronics;