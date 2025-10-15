import React from 'react';
import { orderBookData } from '../data';

const OrderBook = () => {
  return (
    <div className="order-book">
      <h3 className="section-title">Order Book</h3>
      <div className="order-book-table">
        <div className="order-book-header">
          <span>Price (USDT)</span>
          <span>Amount (BTC)</span>
          <span>Total</span>
        </div>
        <div className="order-book-asks">
          {orderBookData.asks.map((order, index) => (
            <div key={index} className="order-row ask">
              <span className="price">{order.price.toLocaleString()}</span>
              <span>{order.amount}</span>
              <span>{order.total.toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="order-book-spread">
          <span className="spread-price">$43,256.78</span>
          <span className="spread-text">Spread: $2.50</span>
        </div>
        <div className="order-book-bids">
          {orderBookData.bids.map((order, index) => (
            <div key={index} className="order-row bid">
              <span className="price">{order.price.toLocaleString()}</span>
              <span>{order.amount}</span>
              <span>{order.total.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;