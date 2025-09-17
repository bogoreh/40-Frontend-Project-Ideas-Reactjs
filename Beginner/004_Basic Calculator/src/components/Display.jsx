import '../styles/Calculator.css';

const Display = ({ value }) => {
  return (
    <div className="calculator-display">
      {value || '0'}
    </div>
  );
};

export default Display;