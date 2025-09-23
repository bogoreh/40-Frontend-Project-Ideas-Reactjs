// src/components/Card.jsx
import './Card.css';

const Card = ({ card, onClick, isFlipped, isMatched }) => {
  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <span>?</span>
        </div>
        <div className="card-back">
          <span>{card.emoji}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;