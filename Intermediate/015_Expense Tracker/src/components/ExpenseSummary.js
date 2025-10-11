import React from 'react';
import './components.css';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${total.toFixed(2)}</p>
      <p>Number of Expenses: {expenses.length}</p>
    </div>
  );
};

export default ExpenseSummary;