import React from 'react'

const MarketOverview = ({ data }) => {
  return (
    <div className="market-overview">
      <h2 className="market-overview__title">Market Overview</h2>
      
      <div className="market-indicators">
        <div className="indicator">
          <span className="indicator__label">S&P 500</span>
          <span className="indicator__value positive">4,567.89</span>
          <span className="indicator__change positive">+1.2%</span>
        </div>
        
        <div className="indicator">
          <span className="indicator__label">Dow Jones</span>
          <span className="indicator__value positive">35,678.90</span>
          <span className="indicator__change positive">+0.8%</span>
        </div>
        
        <div className="indicator">
          <span className="indicator__label">NASDAQ</span>
          <span className="indicator__value negative">14,321.45</span>
          <span className="indicator__change negative">-0.3%</span>
        </div>
      </div>

      <div className="market-stats">
        <div className="stat">
          <span className="stat__label">Advancers</span>
          <span className="stat__value">1,234</span>
        </div>
        <div className="stat">
          <span className="stat__label">Decliners</span>
          <span className="stat__value">789</span>
        </div>
        <div className="stat">
          <span className="stat__label">Unchanged</span>
          <span className="stat__value">156</span>
        </div>
      </div>
    </div>
  )
}

export default MarketOverview