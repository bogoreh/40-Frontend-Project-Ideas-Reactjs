import React, { useState } from 'react';

const OrderForm = () => {
  const [orderType, setOrderType] = useState('buy');
  const [price, setPrice] = useState('43256.78');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('');

  const handleAmountChange = (value) => {
    setAmount(value);
    if (value && price) {
      setTotal((parseFloat(value) * parseFloat(price)).toFixed(2));
    }
  };

  const handlePriceChange = (value) => {
    setPrice(value);
    if (value && amount) {
      setTotal((parseFloat(amount) * parseFloat(value)).toFixed(2));
    }
  };

  return (
    <div className="order-form">
      <div className="order-type-selector">
        <button
          className={`type-btn buy ${orderType === 'buy' ? 'active' : ''}`}
          onClick={() => setOrderType('buy')}
        >
          Buy
        </button>
        <button
          className={`type-btn sell ${orderType === 'sell' ? 'active' : ''}`}
          onClick={() => setOrderType('sell')}
        >
          Sell
        </button>
      </div>

      <div className="form-group">
        <label>Price (USDT)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Amount (BTC)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => handleAmountChange(e.target.value)}
          className="form-input"
          placeholder="0.00"
        />
      </div>

      <div className="form-group">
        <label>Total (USDT)</label>
        <input
          type="number"
          value={total}
          readOnly
          className="form-input"
        />
      </div>

      <div className="balance-info">
        <span>Available: 1,245.67 USDT</span>
      </div>

      <button className={`order-submit ${orderType}`}>
        {orderType === 'buy' ? 'Buy BTC' : 'Sell BTC'}
      </button>

      <div className="quick-actions">
        <div className="quick-percentages">
          {[25, 50, 75, 100].map((percent) => (
            <button key={percent} className="percent-btn">
              {percent}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;