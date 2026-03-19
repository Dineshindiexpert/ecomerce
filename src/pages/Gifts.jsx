import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Productcard';
import Loading from '../components/Loading';
// import axios from 'axios';

const Gifts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeautyProducts = async () => {
      try {

        const res = await apiService.getProducts();


        const fashionItems = res.data.filter(item =>
          item.category.includes("clothing")
        );

        setProducts(fashionItems);
      } catch (err) {
        console.error("Bhai error aagaya:", err);
      } finally {

        setLoading(false);
      }
    }

    fetchBeautyProducts();
  }, []);


   

  return (<>{loading ? <Loading /> :

    <div className="container py-4">
      <div className='my-4'>
        <h2 className="fw-bold">Beauty & Gift Collection</h2>
        <p className="text-muted">Premium skincare and beauty products for your loved ones.</p>
      </div>

      
      <h5 className="mb-3 fw-bold">Featured Items</h5>
      <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scrollbar">
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="me-3" style={{ minWidth: "250px" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      
      <h3 className="mb-4 mt-5 text-center py-2 border-top pt-4">Explore All Products</h3>
      <div className="row g-4">
        {products.map((product) => (
          <div key={`grid-${product.id}`} className="col-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  }</>);
};

export default Gifts;
