import { useState } from 'react';
import Button from './Button';
import { quotes } from '../data/quotes';
import './QuoteBox.css';

function QuoteBox() {
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const getRandomQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.text === currentQuote.text && quotes.length > 1);
    
    setCurrentQuote(newQuote);
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(currentQuote.text)}" - ${encodeURIComponent(currentQuote.author)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div id="quote-box" className="quote-box">
      <div className="quote-content">
        <p id="text" className="quote-text">"{currentQuote.text}"</p>
        <p id="author" className="quote-author">- {currentQuote.author}</p>
      </div>
      <div className="quote-actions">
        <Button 
          id="new-quote" 
          onClick={getRandomQuote}
          className="new-quote-btn"
        >
          New Quote
        </Button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(currentQuote.text)}" - ${encodeURIComponent(currentQuote.author)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tweet-button"
        >
          <Button className="tweet-btn">
            Tweet Quote
          </Button>
        </a>
      </div>
    </div>
  );
}

export default QuoteBox;