import React from 'react'

const StockCard = ({ stock }) => {
  const isPositive = stock.change >= 0

  return (
    <div className="stock-card">
      <div className="stock-card__header">
        <h3 className="stock-card__symbol">{stock.symbol}</h3>
        <span className="stock-card__name">{stock.name}</span>
      </div>
      
      <div className="stock-card__price">
        <span className="price">${stock.price}</span>
        <div className={`change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="change-amount">
            {isPositive ? '+' : ''}{stock.change} ({isPositive ? '+' : ''}{stock.changePercent}%)
          </span>
        </div>
      </div>
      
      <div className="stock-card__footer">
        <span className="volume">Volume: {stock.volume}</span>
      </div>
    </div>
  )
}

export default StockCard