import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import CartPage from './pages/CartPage'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <Products addToCart={addToCart} />
      case 'cart':
        return <CartPage 
          cart={cart} 
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      default:
        return <Home addToCart={addToCart} />
    }
  }

  return (
    <div className="app">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        cartItemsCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App