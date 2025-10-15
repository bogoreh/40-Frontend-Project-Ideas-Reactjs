import React from 'react';

const TradingView = () => {
  return (
    <div className="trading-view">
      <div className="chart-header">
        <div className="pair-info">
          <h2>BTC/USDT</h2>
          <span className="price-large">$43,256.78</span>
          <span className="change-positive">+2.34%</span>
        </div>
        <div className="time-frames">
          {['1H', '4H', '1D', '1W', '1M'].map((frame) => (
            <button key={frame} className={`time-frame ${frame === '1D' ? 'active' : ''}`}>
              {frame}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-placeholder">
        <div className="chart-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="grid-line"></div>
          ))}
        </div>
        <div className="price-labels">
          <span>$43,500</span>
          <span>$43,400</span>
          <span>$43,300</span>
          <span>$43,200</span>
          <span>$43,100</span>
        </div>
        <div className="chart-line"></div>
        <div className="chart-overlay">
          <span>Live Chart</span>
          <p>Real-time trading data would be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default TradingView;