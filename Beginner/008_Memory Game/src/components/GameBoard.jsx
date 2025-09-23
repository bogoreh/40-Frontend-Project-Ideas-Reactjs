// src/components/GameBoard.jsx
import Card from './Card';
import './GameBoard.css';

const GameBoard = ({ cards, onCardClick, disabled }) => {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => !disabled && !card.isFlipped && onCardClick(card)}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
        />
      ))}
    </div>
  );
};

export default GameBoard;