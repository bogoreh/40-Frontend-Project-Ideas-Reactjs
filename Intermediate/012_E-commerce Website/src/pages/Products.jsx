import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Products = ({ addToCart }) => {
  return (
    <div className="products-page">
      <h1>All Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Products