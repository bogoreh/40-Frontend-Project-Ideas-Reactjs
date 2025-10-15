import React from 'react';
import { tradeHistory } from '../data';

const TradeHistory = () => {
  return (
    <div className="trade-history">
      <h3 className="section-title">Recent Trades</h3>
      <div className="trade-table">
        <div className="trade-header">
          <span>Time</span>
          <span>Price</span>
          <span>Amount</span>
        </div>
        {tradeHistory.map((trade) => (
          <div key={trade.id} className="trade-row">
            <span className="time">{trade.time}</span>
            <span className={`price ${trade.type}`}>
              ${trade.price.toLocaleString()}
            </span>
            <span className="amount">{trade.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;