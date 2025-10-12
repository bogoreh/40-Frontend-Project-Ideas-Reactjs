function Square({ value, onClick, isWinning }) {
  return (
    <button 
      className={`square ${isWinning ? 'winning' : ''} ${value || 'empty'}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Square