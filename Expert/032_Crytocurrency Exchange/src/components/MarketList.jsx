import React from 'react';
import { cryptocurrencies } from '../data';

const MarketList = () => {
  return (
    <div className="market-list">
      <h3 className="section-title">Markets</h3>
      <div className="market-table">
        <div className="market-header">
          <span>Pair</span>
          <span>Price</span>
          <span>Change</span>
        </div>
        {cryptocurrencies.map((crypto) => (
          <div key={crypto.id} className="market-row">
            <div className="pair-info">
              <span className="symbol">{crypto.symbol}</span>
              <span className="name">{crypto.name}</span>
            </div>
            <span className="price">${crypto.price.toLocaleString()}</span>
            <span className={`change ${crypto.change >= 0 ? 'positive' : 'negative'}`}>
              {crypto.change >= 0 ? '+' : ''}{crypto.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketList;