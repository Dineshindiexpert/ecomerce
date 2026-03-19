import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Productcard'
import Loading from '../components/Loading';
import { apiService } from '../api';

const Books = () => {
  
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await apiService.getProducts();
        
        setProducts(res.data);
      } catch (err) {
        console.log("Error aagaya bhai!", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid px-3">
          <div className='my-3'>
            <h4>THIS IS A BOOK PAGE HERE</h4>
          </div>

          {/* FIRST HORIZONTAL SCROLL */}
          <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
            {products?.map((product) => (
              <div
                key={product.id}
                className="me-3"
                style={{ minWidth: "220px" }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <h3 className="mb-3 text-center py-2">Our Best Sellers</h3>
          
          {/* SECOND HORIZONTAL SCROLL (Same logic, flex-nowrap added) */}
          <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
            {products?.slice(0, 10).reverse().map((product) => (
              <div
                key={`best-${product.id}`}
                className="me-3"
                style={{ minWidth: "220px" }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Books;
