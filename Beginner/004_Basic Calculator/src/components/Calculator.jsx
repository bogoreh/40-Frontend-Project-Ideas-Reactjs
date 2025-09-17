import { useState } from 'react';
import Display from './Display';
import Button from './Button';
import '../styles/Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);
    const newValue = currentValue / 100;
    setDisplayValue(String(newValue));
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplayValue(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(displayValue);

    if (previousValue !== null && operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplayValue(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="calculator-buttons">
        <Button value="C" onClick={clearDisplay} className="function" />
        <Button value="±" onClick={toggleSign} className="function" />
        <Button value="%" onClick={inputPercent} className="function" />
        <Button value="/" onClick={performOperation} className="operator" />
        
        <Button value="7" onClick={inputDigit} />
        <Button value="8" onClick={inputDigit} />
        <Button value="9" onClick={inputDigit} />
        <Button value="*" onClick={performOperation} className="operator" />
        
        <Button value="4" onClick={inputDigit} />
        <Button value="5" onClick={inputDigit} />
        <Button value="6" onClick={inputDigit} />
        <Button value="-" onClick={performOperation} className="operator" />
        
        <Button value="1" onClick={inputDigit} />
        <Button value="2" onClick={inputDigit} />
        <Button value="3" onClick={inputDigit} />
        <Button value="+" onClick={performOperation} className="operator" />
        
        <Button value="0" onClick={inputDigit} className="zero" />
        <Button value="." onClick={inputDot} />
        <Button value="=" onClick={handleEquals} className="operator" />
      </div>
    </div>
  );
};

export default Calculator;