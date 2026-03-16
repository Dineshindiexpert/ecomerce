import React from 'react'
import Products from '../db/Products'
import ProductCard from '../components/Productcard'

const Toys = () => {
  return (
    <div>
      <div className='my-3'>
        <h3>

          this is a toys
        </h3>

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
       
        
      
    </div>
  )
}

export default Toys
