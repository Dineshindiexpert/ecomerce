import React, { useEffect, useState } from 'react'
// import Products from '../db/Products'
import ProductCard from '../components/Productcard'
import { apiService } from '../api';
import Loading from '../components/Loading';


const Toys = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await apiService.getProducts();

        setproducts(res.data);
      } catch (err) {
        console.log("Error aagaya bhai!", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);


  return (<>
    {loading ? <Loading /> :
      <div>

        {/* HORIZONTAL SCROLL */}
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



      </div>}
  </>)
}

export default Toys
