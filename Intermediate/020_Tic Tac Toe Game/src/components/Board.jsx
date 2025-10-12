import Square from './Square'

function Board({ squares, onClick, winningLine }) {
  const renderSquare = (index) => {
    const isWinning = winningLine && winningLine.includes(index)
    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={() => onClick(index)}
        isWinning={isWinning}
      />
    )
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board