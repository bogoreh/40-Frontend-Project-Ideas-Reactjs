import React from 'react'

const Header = ({ currentPage, setCurrentPage, cartItemsCount }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo" onClick={() => setCurrentPage('home')}>
          ShopEasy
        </h1>
        <nav className="nav">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => setCurrentPage('products')}
          >
            Products
          </button>
          <button 
            className={`nav-link cart-button ${currentPage === 'cart' ? 'active' : ''}`}
            onClick={() => setCurrentPage('cart')}
          >
            Cart ({cartItemsCount})
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header