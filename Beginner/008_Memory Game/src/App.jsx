// src/App.jsx
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import useMemoryGame from './hooks/useMemoryGame';
import './App.css';

function App() {
  const { cards, moves, matches, disabled, onCardClick, onReset } = useMemoryGame();

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <ScoreBoard 
        moves={moves} 
        matches={matches} 
        onReset={onReset} 
      />
      <GameBoard 
        cards={cards} 
        onCardClick={onCardClick} 
        disabled={disabled} 
      />
    </div>
  );
}

export default App;