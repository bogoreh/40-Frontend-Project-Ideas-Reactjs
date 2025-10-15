import React from 'react';
import Header from './components/Header';
import MarketList from './components/MarketList';
import TradingView from './components/TradingView';
import OrderBook from './components/OrderBook';
import TradeHistory from './components/TradeHistory';
import OrderForm from './components/OrderForm';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="sidebar-left">
          <MarketList />
        </div>
        
        <div className="trading-section">
          <TradingView />
          <div className="trading-bottom">
            <OrderBook />
            <TradeHistory />
          </div>
        </div>
        
        <div className="sidebar-right">
          <OrderForm />
        </div>
      </main>
    </div>
  );
}

export default App;