"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to install: npm install axios

const Apicalling = () => {
    const [loading, setloading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
              
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error while fetching data: " + error);
            } finally {
                setloading(false);
            }
        };

       
        const timer = setTimeout(fetchData, 1000);

        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading products...</h1>
            ) : (
                <div>
                    <h1>Product List</h1>
                    <pre>{JSON.stringify(products, null, 2)}</pre>
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Apicalling;
