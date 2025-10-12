import { useState } from 'react'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import './styles/App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const winner = calculateWinner(squares)
  const isDraw = !winner && squares.every(square => square !== null)

  const handleClick = (index) => {
    if (squares[index] || winner || isDraw) return

    const newSquares = squares.slice()
    newSquares[index] = isXNext ? 'X' : 'O'
    setSquares(newSquares)
    setIsXNext(!isXNext)
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setIsXNext(true)
  }

  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>
      <GameStatus 
        winner={winner} 
        isXNext={isXNext} 
        isDraw={isDraw} 
      />
      <Board 
        squares={squares} 
        onClick={handleClick} 
        winningLine={winner?.line}
      />
      <button className="reset-btn" onClick={resetGame}>
        New Game
      </button>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ]

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] }
    }
  }
  return null
}

export default App