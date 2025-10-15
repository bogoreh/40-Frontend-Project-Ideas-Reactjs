export const cryptocurrencies = [
  { id: 1, symbol: 'BTC/USDT', name: 'Bitcoin', price: 43256.78, change: 2.34, volume: '2.4B' },
  { id: 2, symbol: 'ETH/USDT', name: 'Ethereum', price: 2345.67, change: -1.23, volume: '1.2B' },
  { id: 3, symbol: 'SOL/USDT', name: 'Solana', price: 102.45, change: 5.67, volume: '800M' },
  { id: 4, symbol: 'ADA/USDT', name: 'Cardano', price: 0.5123, change: 0.89, volume: '300M' },
  { id: 5, symbol: 'DOT/USDT', name: 'Polkadot', price: 7.89, change: -0.45, volume: '200M' }
];

export const orderBookData = {
  bids: [
    { price: 43250.00, amount: 1.234, total: 53401.50 },
    { price: 43248.50, amount: 0.856, total: 37036.76 },
    { price: 43246.75, amount: 2.145, total: 92763.18 },
    { price: 43245.25, amount: 1.567, total: 67754.23 },
    { price: 43243.80, amount: 0.923, total: 39914.27 }
  ],
  asks: [
    { price: 43252.50, amount: 0.765, total: 33088.16 },
    { price: 43254.25, amount: 1.234, total: 53355.14 },
    { price: 43256.00, amount: 0.856, total: 37027.14 },
    { price: 43257.75, amount: 2.145, total: 92787.87 },
    { price: 43259.50, amount: 1.567, total: 67817.36 }
  ]
};

export const tradeHistory = [
  { id: 1, time: '12:30:45', price: 43256.78, amount: 0.125, type: 'buy' },
  { id: 2, time: '12:30:42', price: 43255.50, amount: 0.250, type: 'sell' },
  { id: 3, time: '12:30:38', price: 43257.25, amount: 0.500, type: 'buy' },
  { id: 4, time: '12:30:35', price: 43254.75, amount: 0.750, type: 'sell' },
  { id: 5, time: '12:30:30', price: 43258.00, amount: 0.100, type: 'buy' },
  { id: 6, time: '12:30:25', price: 43253.25, amount: 1.250, type: 'sell' }
];