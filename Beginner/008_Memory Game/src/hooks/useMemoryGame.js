// src/hooks/useMemoryGame.js
import { useState, useEffect } from 'react';

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

const useMemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const initializeGame = () => {
    const gameCards = [...emojis, ...emojis]
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false
      }))
      .sort(() => Math.random() - 0.5);

    setCards(gameCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setDisabled(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const flipCard = (card) => {
    if (disabled || card.isFlipped || card.isMatched) return;

    const newCards = cards.map(c => 
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setDisabled(true);
      setMoves(moves + 1);

      const [firstCard, secondCard] = newFlippedCards;
      
      if (firstCard.emoji === secondCard.emoji) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
        setFlippedCards([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(c => 
              newFlippedCards.some(fc => fc.id === c.id) && !c.isMatched 
                ? { ...c, isFlipped: false } 
                : c
            )
          );
          setFlippedCards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedCards.length > 0 && matchedCards.length === cards.length) {
      setTimeout(() => {
        alert(`Congratulations! You won in ${moves} moves!`);
      }, 500);
    }
  }, [matchedCards, cards.length, moves]);

  return {
    cards,
    moves,
    matches: matchedCards.length / 2,
    disabled,
    onCardClick: flipCard,
    onReset: initializeGame
  };
};

export default useMemoryGame;