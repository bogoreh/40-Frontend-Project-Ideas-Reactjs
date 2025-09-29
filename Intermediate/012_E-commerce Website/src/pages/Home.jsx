import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = ({ addToCart }) => {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopEasy</h1>
          <p>Discover amazing products at great prices</p>
        </div>
      </section>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home