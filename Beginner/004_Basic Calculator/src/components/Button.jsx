import '../styles/Calculator.css';

const Button = ({ value, onClick, className = '' }) => {
  return (
    <button 
      className={`calculator-button ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;