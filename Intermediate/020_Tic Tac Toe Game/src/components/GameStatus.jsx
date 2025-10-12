function GameStatus({ winner, isXNext, isDraw }) {
  let status

  if (winner) {
    status = (
      <div className="status winner">
        <span className="winner-text">Player {winner.player} Wins!</span>
        <div className="confetti">🎉</div>
      </div>
    )
  } else if (isDraw) {
    status = (
      <div className="status draw">
        <span>It's a Draw!</span>
        <div className="draw-emoji">🤝</div>
      </div>
    )
  } else {
    status = (
      <div className="status next-player">
        Next Player: <span className={`player ${isXNext ? 'x' : 'o'}`}>
          {isXNext ? 'X' : 'O'}
        </span>
      </div>
    )
  }

  return <div className="game-status">{status}</div>
}

export default GameStatus