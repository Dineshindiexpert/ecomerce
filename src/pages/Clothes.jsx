import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Productcard';
import Loading from '../components/Loading';
import { apiService } from '../api'; // Ensure your api.js has getProducts()

const Clothes = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                // 1. API Call (Using your centralized apiService)
                const res = await apiService.getProducts();

                // 2. Industry Style: Filter only clothing categories
                const fashionItems = res.data.filter(item => 
                    item.category.includes("clothing")
                );

                setProducts(fashionItems);
            } catch (err) {
                console.error("Bhai error aagaya:", err);
            } finally {
                // 3. Smooth transition for Loading GIF
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <div className="container-fluid px-4 bg-white min-vh-100">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className='my-4'>
                        <h3 className="fw-bold text-dark">India's Trending Fashion Here</h3>
                    </div>

                    {/* FIRST SECTION: Trending Clothes */}
                    <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scrollbar">
                        {products.map((product) => (
                            <div key={product.id} className="me-3" style={{ minWidth: "250px" }}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    <h3 className="mb-3 text-center py-3 fw-bold border-top mt-4">Our New Arrivals</h3>

                    {/* SECOND SECTION: Reversed list for variety */}
                    <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scrollbar">
                        {[...products].reverse().map((product) => (
                            <div key={`rev-${product.id}`} className="me-3" style={{ minWidth: "250px" }}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Clothes;
