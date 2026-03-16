import React from 'react'
import Products from '../db/Products'
import ProductCard from '../components/Productcard'

const Clothes = () => {
    return (
        <div>
            <div className='my-4'>
                 <h3>India's trending fashion Here </h3>
            </div>
            {/* HORIZONTAL SCROLL */}
            <div className="d-flex flex-row flex-nowrap overflow-auto pb-3">
                {Products.map((product) => (
                    <div
                        key={product.id}
                        className="me-3"
                        style={{ minWidth: "220px" }}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <h3 className="mb-3 text-center py-2">Our Products</h3>
            <div className="d-flex flex-row   overflow-auto pb-3">
                {Products.map((product) => (
                    <div
                        key={product.id}
                        className="me-3"
                        style={{ minWidth: "220px" }}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clothes
