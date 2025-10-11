import React from 'react';
import './components.css';

const ExpenseList = ({ expenses, deleteExpense }) => {
  if (expenses.length === 0) {
    return <div className="no-expenses">No expenses added yet.</div>;
  }

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <div className="expense-details">
            <h3>{expense.title}</h3>
            <p>Amount: ${expense.amount.toFixed(2)}</p>
            <p>Date: {expense.date.toLocaleDateString()}</p>
          </div>
          <button 
            className="delete-btn"
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;