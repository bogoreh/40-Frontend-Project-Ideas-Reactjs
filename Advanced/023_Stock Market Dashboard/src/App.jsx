import React from 'react'
import Header from './components/Header'
import StockCard from './components/StockCard'
import MarketOverview from './components/MarketOverview'
import Chart from './components/Chart'
import { useStocks } from './hooks/useStocks'

function App() {
  const { stocks, marketData, chartData } = useStocks()

  return (
    <div className="app">
      <Header />
      <div className="dashboard">
        <div className="dashboard__main">
          <div className="stocks-grid">
            {stocks.map(stock => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>
          <div className="chart-section">
            <Chart data={chartData} />
          </div>
        </div>
        <div className="dashboard__sidebar">
          <MarketOverview data={marketData} />
        </div>
      </div>
    </div>
  )
}

export default App