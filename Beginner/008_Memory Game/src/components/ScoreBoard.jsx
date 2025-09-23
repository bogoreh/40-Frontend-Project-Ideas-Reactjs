// src/components/ScoreBoard.jsx
import './ScoreBoard.css';

const ScoreBoard = ({ moves, matches, onReset }) => {
  return (
    <div className="score-board">
      <div className="stats">
        <div className="stat">
          <span className="label">Moves:</span>
          <span className="value">{moves}</span>
        </div>
        <div className="stat">
          <span className="label">Matches:</span>
          <span className="value">{matches} / 8</span>
        </div>
      </div>
      <button className="reset-btn" onClick={onReset}>
        Reset Game
      </button>
    </div>
  );
};

export default ScoreBoard;