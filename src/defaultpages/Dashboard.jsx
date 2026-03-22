import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../components/Pagination'
import ProductCard from '../components/Productcard'
import Loading from '../components/Loading'
import { apiService } from '../api'

const Dashboard = () => {
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

    return (<>
        {loading ? <Loading /> :
            <div className="container-fluid px-4 bg-light min-vh-100">
                <h3 className="py-3">Hero Section</h3>
                <div className="mb-4"><Pagination /></div>

                <h3 className="mb-3 text-center py-2 fw-bold">Our Products</h3>
                <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 pt-2">
                    {products.map((product) => (
                        <div key={product.id} className="me-3" style={{ minWidth: "250px" }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <h3 className="my-4 text-center py-2 fw-bold">Best Sellers</h3>
                <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 pt-2">
                    {[...products].reverse().map((product) => (
                        <div key={`rev-${product.id}`} className="me-3" style={{ minWidth: "250px" }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        }

    </>)
}

export default Dashboard
