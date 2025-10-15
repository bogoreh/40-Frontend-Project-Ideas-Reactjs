import React from 'react';
import { TrendingUp, User, Bell, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <TrendingUp className="logo-icon" />
        <h1 className="logo">CryptoExchange</h1>
      </div>
      <div className="header-center">
        <nav className="nav">
          <a href="#" className="nav-link active">Trade</a>
          <a href="#" className="nav-link">Markets</a>
          <a href="#" className="nav-link">Portfolio</a>
          <a href="#" className="nav-link">Futures</a>
        </nav>
      </div>
      <div className="header-right">
        <div className="user-balance">
          <span>Balance: $12,456.78</span>
        </div>
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="icon-btn">
          <Settings size={20} />
        </button>
        <button className="icon-btn">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;