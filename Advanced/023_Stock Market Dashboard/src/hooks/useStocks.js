import { useState, useEffect } from 'react'

export const useStocks = () => {
  const [stocks, setStocks] = useState([])
  const [marketData, setMarketData] = useState({})
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    // Mock data - in real app, you'd fetch from an API
    const mockStocks = [
      { symbol: 'AAPL', name: 'Apple Inc.', price: 178.72, change: 2.34, changePercent: 1.33, volume: '45.2M' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 138.21, change: -1.23, changePercent: -0.88, volume: '32.1M' },
      { symbol: 'MSFT', name: 'Microsoft', price: 374.51, change: 5.67, changePercent: 1.54, volume: '28.9M' },
      { symbol: 'TSLA', name: 'Tesla Inc.', price: 235.76, change: -8.45, changePercent: -3.46, volume: '67.8M' },
      { symbol: 'AMZN', name: 'Amazon.com', price: 147.42, change: 3.21, changePercent: 2.23, volume: '38.5M' },
      { symbol: 'META', name: 'Meta Platforms', price: 332.64, change: -2.18, changePercent: -0.65, volume: '24.3M' }
    ]

    const mockChartData = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      price: 170 + Math.random() * 20
    }))

    setStocks(mockStocks)
    setChartData(mockChartData)
  }, [])

  return { stocks, marketData, chartData }
}