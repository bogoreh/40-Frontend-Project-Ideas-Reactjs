import './Button.css';

function Button({ onClick, children, className = '' }) {
  return (
    <button 
      className={`quote-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;